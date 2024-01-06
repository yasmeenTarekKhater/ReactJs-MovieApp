import { useEffect, useState } from "react";
import MoveiItem from "../components/MovieItem";
import { axiosInstance } from "../apis/config";

const MovieList = () => {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        axiosInstance.get('/popular?api_key=a0ce567f065300dd0ab70fc821b656ef')
        .then(res=>(setMovies(res.data.results)))
    },[])
    

    return ( 
    <div className="container mt-5">
         <h3>Most Popular</h3><hr/>
         <MoveiItem movies={movies}/>
    </div> );
}
 
export default MovieList;