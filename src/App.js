import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import FavMovies from './components/FavMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>

      <Header/>
      <Routes>
        
     <Route path='/' element={<Home/>}/>
     <Route path='/favmovies' element={<FavMovies/>}/>

      </Routes>

    </div>
  );
}

export default App;
