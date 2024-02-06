import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="endereco">
                  <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                  <div>
                    <p>Brasília - DF</p>
                 </div>  
                </div>
                <div className="phone">
                <h4>
                  <FaWhatsapp size={20} 
                      style={{color:"#fff",
                      marginRight: "2rem"}}
                      /><a href=" https://w.app/PauloHenrique">Whatsapp</a>
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk
                         size={20}
                         style={{color:"#fff",
                          marginRight: "2rem"}}
                           /><a href="mailto:paulohenrique.012araujo@gmail.com">
                            Email</a>
                           </h4>
                </div>
            </div>

            <div className="right">
              <h4>Sobre os Projetos</h4>
              <p>Trazer riqueza em detalhes, clareza nas decições e conforto para quem está 
                analisando, trazendo uma nova experiência para o contratante e o consumidor final.</p>
                <div className="social">
                  <FaLinkedin size={40} 
                  style={{color: "#fff",
                  marginRight: "2rem"}} />
                  <p><a href="https://www.linkedin.com/in/paulo-henrique20">
                  linkedin</a></p>

                  <FaInstagram size={40} 
                  style={{color: "#fff",
                  marginRight: "2rem"}} />
                  <p><a href="https://www.instagram.com/paulo.henri_12">
                  Instagram</a></p>

                  <FaWhatsapp size={40} 
                  style={{color: "#fff",
                  marginRight: "2rem"}} />
                  <p><a href=" https://w.app/PauloHenrique">Whatsapp</a></p>
                </div>
            </div>
        </div>
    </div>
  )
 
}
export default Footer
