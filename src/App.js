import './App.css';
import Header from './components/Header/Header';
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Starships/>} />
      <Route path='/starship' element={<StarshipPage/>} />
    </Routes>
    </>
  );
}

export default App;
