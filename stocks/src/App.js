import './App.css';
import { Route, Routes } from 'react-router-dom';
import data from "./data"

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Stocks from './pages/Stocks';
import SsDetails from './pages/SsDetails';

function App() {


const stocks = data.map((elem, idx)=>{
  return {...elem}
})

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/stocks' element = {<Stocks stocks ={stocks}/>}/>
        <Route path='/stocks/:ss' element = {<SsDetails symbol = {stocks.symbol}/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
