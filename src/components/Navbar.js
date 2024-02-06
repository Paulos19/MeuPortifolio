import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import { FaBars, FaTimes } from "react-icons/fa"
import React, { useState } from 'react'


const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

const [color, setColor] = useState(false);
const changeColor = () =>{
    if (window.scrollY >=100) {
        setColor(true);
    } else {
        setColor(false);
    }
};


window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Paulo Henrique.</h1>
        </Link>
        <ul className={click ? "navmenu active" : "navmenu"}>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Projetos">Projetos</Link>
            </li>

            <li>
                <Link to="/Sobre">Sobre</Link>
            </li>

            <li>
                <Link to="/Contatos">Contatos</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "#fff"}
            }/>) : (
             <FaBars size={20} style={{color: "#fff"}
        }/>)}   
        </div>
    </div>
  );
};

export default Navbar
