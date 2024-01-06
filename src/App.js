import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import WatchList from './pages/WatchList';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFount';
import NavBar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/watchList' element={<WatchList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/movieDetails/:id' element={<MovieDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
