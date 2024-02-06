import React from 'react'


import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Heroimg2 from '../components/Heroimg2';
import SobreContent from '../components/SobreContent';


const Sobre = () => {
  return (
  <div>
    <Navbar />
    <Heroimg2 heading="SOBRE." 
    text="O seu desenvolvedor FullStack!" />
    <SobreContent />
    <Footer />
  </div>
  );
};

export default Sobre
