import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';
import "./MovieItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addmovie, decreaseCounter, increaseCounter, removemovie } from "../store/slices/counter";



const MoveiItem = (props) => {
  const { movies} = props;
  const navigate=useNavigate();
  const [itemOffset, setItemOffset] = useState(0);
  const[currentItems,setCurrentItems]=useState([]);
  const[pageCount,setPageCount]=useState(0);
  const dispatch = useDispatch();
  const itemsPerPage=10;
  
  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
    
    },[itemOffset,itemsPerPage,movies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
      setItemOffset(newOffset);
    };
    const handleHeartColor=(movieId)=>{
     setCurrentItems((prevMovies)=>
     prevMovies.map((movie)=>
     movie.id===movieId?{ ...movie, liked: !movie.liked } : movie
     )
     )
    }
  return (
    <div className="row justify-content-evenly gap-4">
      {currentItems.map((movie) => {
        return (
          <div className="movieItem col-2" key={movie.id}>
            <img
              height={"60%"}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              width={"100%"}
              alt="movie"
              className="mt-2 rounded-2"
            />
            <h5 className="mt-1">{movie.vote_count}%</h5>
            <h6 className="movieTitle"  onClick={()=>navigate(`/movieDetails/${movie.id}`)}>{movie.title}</h6>
            <div className="row justify-content-between">
              <h6 className="col-9">{movie.release_date}</h6>
              <FontAwesomeIcon
                icon={faHeart}
                color={`${movie.liked ? 'red' : 'gray'}`}
                style={{cursor:'pointer'}}
                className="col-1 mt-1 "
                onClick={()=>{
                  if(!movie.liked){
                    dispatch(increaseCounter())
                    dispatch(addmovie(movie))
                  }else{
                    dispatch(decreaseCounter())
                    dispatch(removemovie(movie.id))
                  }
                  handleHeartColor(movie.id)
                }}
              />
            </div>
          </div>
        );
      })}
  <ReactPaginate
        count={10} variant="outlined"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="active"
      />
       
    </div>
  );
};

export default MoveiItem;
