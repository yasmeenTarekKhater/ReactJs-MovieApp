import { useDispatch, useSelector } from "react-redux";
import "./WatchList.css";
import { decreaseCounter, removemovie } from "../store/slices/counter";
const WatchList = () => {
  const watchList = useSelector((state) => state.counter.watchList);
  const dispatch=useDispatch();

  return (
    <div className="container mt-5">
      <h1>Watch List</h1>
      <hr />
      <div className="row gap-3 justify-content-center">
        {watchList.map((movie) => {
          return (
            <div className="col-5 watchListItem d-flex rounded-3 p-2">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="movieItem"
                  width={"150px"}
                  height={"100%"}
                />
              </div>
              <div className="ms-5">
                <div className="d-flex">
                  <h4>{movie.title}</h4>
                  <span className="p-2 h-25 rounded-4 bg-danger watchlistRemove"
                  onClick={()=>{
                    dispatch(removemovie(movie.id))
                    dispatch(decreaseCounter())
                  }}
                  >X</span>
                </div>
                <h6>{movie.overview}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
