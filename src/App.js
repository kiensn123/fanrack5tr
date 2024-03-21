import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from "./component/page/Home";
import Mennu from "./component/common/Header";
import Hentai from "./component/page/Hentai";

import './App.css'
function App() {
  return (
    <>
  
    <section className="chua">
      <header>
        <Mennu />
      </header>
      

      <section>
        
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/hentai" Component={Hentai}/>

        </Routes>
      </section>
   
    </section>
   
    
    
    
    
    </>
     
      
  
  );
}

export default App;
// npm i react-router-dom