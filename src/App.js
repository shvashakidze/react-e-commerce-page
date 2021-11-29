
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'; 
function App() {
  return (
   <React.Fragment>
   
    <Navbar />
    <Routes>
    <Route path="/" element={<ProductList />}/>
    <Route path="/details" element={<Details />}/>
    <Route path="/Cart" element={<Cart />}/>
    <Route element={<Default />}/>
    </Routes>
    <Modal />
   </React.Fragment>
  );
}

export default App;
