import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

const PricingCard = () => {
  return (
  <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Básico -</h3>
            <span className="bar"></span>
            <p className="btc">R$ 700</p>
            <p>- 4 Dias -</p>
            <p>- 3 Páginas -</p>
            <p>- Features -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contatos" className="btn">
               COMPRE AGORA
            </Link>
        </div>

        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">R$ 1000</p>
            <p>- 3 Dias -</p>
            <p>- 5 Páginas -</p>
            <p>- Features -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contatos" className="btn">
               COMPRE AGORA
            </Link>
        </div>

        <div className="card">
            <h3>- Empresarial -</h3>
            <span className="bar"></span>
            <p className="btc">R$ 1500</p>
            <p>- 4 Dias -</p>
            <p>- 8 Páginas -</p>
            <p>- Features -</p>
            <p>- Design Responsivo -</p>
            <Link to="/contatos" className="btn">
               COMPRE AGORA
            </Link>
        </div>
    </div>
  </div>
  );
};

export default PricingCard
