
import { useEffect } from 'react';
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter';
import ProductCard from './components/ProductCard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Product from './pages/Product';
function App() {
  

  

  return (
    <>
     
       <BrowserRouter>
       <Routes>
        <Route path="/vaish" element={<Home />}/>
        <Route path="/anu" element={<Project />}/>
        <Route path='/' element={<Product/>}/>
        </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
