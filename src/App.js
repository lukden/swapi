import './App.css';
import Header from './components/Header/Header';
import Starships from './components/Starships';
import StarshipDetails from './pages/StarshipPage';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Starships/>} />
      <Route path='/starship' element={<StarshipDetails/>} />
    </Routes>
    </>
  );
}

export default App;
