import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";

import "./MovieDetails.css";
import { axiosInstance } from "../apis/config";
const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setmovieDetails] = useState({});
  const [movieGenres, setmovieGenres] = useState([]);
  const [movieProduction, setmovieProduction] = useState([]);
  const stars = Array(5).fill(0);
  const [currentvalue, setCurrentvalue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  // console.log(params.id);
  //  console.log(movieDetails);
  const colors = {
    orange: "orange",
    grey: "gray",
  };
  useEffect(() => {
      axiosInstance
      .get(
        `/${params.id}?api_key=a0ce567f065300dd0ab70fc821b656ef`
      )
      .then((res) =>{
        setmovieDetails(res.data);
        setmovieGenres(res.data.genres);
        setmovieProduction(res.data.production_companies);
      } )
      .catch((error) => console.log(error));
  },[]);

  const handelClick = (value) => {
    setCurrentvalue(value);
  };
  const handelMouseOver = (value) => {
    setHoverValue(value);
  };
  const handelMouseleave = (value) => {
    setHoverValue(undefined);
  };
  return (
    <div className="container movieDetails">
      <div className="row justify-content-around mt-5">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="movieImg"
            height={"60%"}
            className="rounded-4"
          />
        </div>
        <div className="col-6">
          <div className="row justify-content-between align-items-center">
            <h3 className="col-10">{movieDetails.title}</h3>
            <FontAwesomeIcon
              icon={faHeart}
              color="red"
              size="xl"
              className="col-1"
            />
          </div>
          <h5 className="text-secondary">{movieDetails.release_date}</h5>
          <div className="row">
            <div className="col-4">
                <div className="d-flex mb-4 ">
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        size={22}
                        key={index}
                        style={{
                          marginRight: 10,
                          cursor: "pointer",
                        }}
                        color={
                          (hoverValue || currentvalue) > index
                            ? colors.orange
                            : colors.grey
                        }
                        onClick={() => handelClick(index + 1)}
                        onMouseOver={() => handelMouseOver(index + 1)}
                        onMouseLeave={handelMouseleave}
                      />
                    );
                  })}
                </div>
            </div>
            <p className="col-2 text-secondary">{movieDetails.vote_count}</p>
          </div>
          <p>{movieDetails.overview}</p>
          <div className="row">
            {
                movieGenres.map(movieType=>{
                    return(
                        <p className="col-3 text-center py-2 rounded-4 bg-warning me-1">{movieType.name}</p>
                    )
                })
            }
            
          </div>
          <div className="d-flex gap-3 ">
          <h6>Duration: {movieDetails.runtime} Mins</h6>
          <h6>Language: {movieDetails.original_language}</h6>
          </div>
          <div className="d-flex mt-3 productionImg">
          {
                movieProduction.map(productionImg=>{
                    return(
                        <img src={`https://image.tmdb.org/t/p/w500/${productionImg.logo_path}`} alt="productionCompane" className="me-3 mb-3"/>
                    )
                })
            }
          </div>
          <a href={movieDetails.homepage} style={{
            color:'gray',
            textDecoration:'none',
            paddingTop:'20px'
          }}>website</a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
