import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Page.css'
import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';

import BottomBar from './components/bottomBar';
import Gallery from './components/gallery';
import logo from "./externals/logo.jpg";

import {Route, Routes } from 'react-router-dom';

class Page extends Component{
  //oggetto Javascript con chiavi che contengono i valori dei singoli elementi da piazzare nella pagina
  render(){
    return (
    //controllo dal back-end: loading fin quando non è arrivato tutto OPPURE progression nelle immagini degli eventi finché non arriva il messaggio

    <>
      <div className="page">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>   
            <Route path="/about" element={<About/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
        <hr/>
        <BottomBar
          logo={logo}/>
      </div>
      
    </>
  );
  }
}

export default Page;
