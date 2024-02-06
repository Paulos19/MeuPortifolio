import "./HeroimgStyles.css";

import React from 'react'

import img1 from "../assets/img1.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return <div className="hero">
    <div className="mask">
    <img className="introimg" src={img1} alt="IntroIMG" />
    </div>
    <div className="content">
        <p>OLÁ! VENHA CONHECER O MEU TRABALHO</p>
        <h1>DESENVOLVEDOR FULLSTACK.</h1>
        <div>
            <Link to="Projetos" 
            className="btn">Projetos</Link>

            <Link to="Contatos" 
            className="btn btn-light">Contatos</Link>
        </div>
    </div>
  </div>
};

export default Heroimg;
