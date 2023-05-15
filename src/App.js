import './App.css';
import { Route, Routes} from 'react-router-dom'
import SingleCocktail from './pages/SingleCocktail';
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/cocktail/:id' element={<SingleCocktail/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </>

  );
}

export default App;
