import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieLangContext } from "./context/MovieLang";
import React, { Suspense, useState } from "react";
import "./App.css";
//-----------------code spliting----------------
const MovieList=React.lazy(()=>import("./pages/MovieList"));
const WatchList=React.lazy(()=>import("./pages/WatchList"));
const Login=React.lazy(()=>import("./pages/Login"));
const Register=React.lazy(()=>import("./pages/Register"));
const NotFound=React.lazy(()=>import("./pages/NotFount"));
const NavBar=React.lazy(()=>import("./components/NavBar"));
const MovieDetails=React.lazy(()=>import("./components/MovieDetails"));

function App() {
  const [movielang, setmovielang] = useState('ltr');
  return (
    <div className="App" style={{direction:movielang}}>
      <BrowserRouter>
        <MovieLangContext.Provider value={{ movielang, setmovielang }}>
          <NavBar />
          <Suspense fallback={'loading......'}>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/watchList" element={<WatchList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/movieDetails/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          
        </MovieLangContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
