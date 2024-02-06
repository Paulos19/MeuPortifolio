import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Projetos = () => {
  return (
  <div>
    <Navbar />
    <Heroimg2 heading="PROJETOS." 
    text="Veja alguns dos 
    projetos que posso oferecer!" />
    <Work />
    <PricingCard />
    <Footer />
  </div>
  );
};

export default Projetos
