import React, { useState } from 'react';

import './App.css';

import HeaderMenu from './section/header/header';
import HeroHome from './section/hero/HeroHome';
import AboutUs from './section/AboutUsHome/AboutUs';
import FormContatti from './section/Form/form';
import Footer from './section/footer/footer';
import Popup from './elements/popUp/popup'; // Importa il popup

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Stato per gestire l'apertura del popup

  // Funzione per chiudere il popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Aggiungi il componente Popup */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      <HeaderMenu></HeaderMenu>
      <HeroHome></HeroHome>
      <FormContatti></FormContatti>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default App;
