import { Link } from "react-router-dom";
import "./SobreContentStyles.css";

import React from 'react'
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"

const SobreContent = () => {
  return (
    <div className="sobre">
        <div className="left">
            <h1>Quem Sou?</h1>
            <p>Sou um desenvolverdor FullStack.
             Crio sites e APIs seguros, funcionais, 
             com segurança e qualidade.</p>
             <Link to="/contatos">
                <button className="btn">CONTATO</button>
             </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} 
                    className="img" alt="true"/>
                </div>

                <div className="img-stack bottom">
                    <img src={react2} 
                    className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SobreContent
