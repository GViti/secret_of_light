import { useEffect } from 'react';
// import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderMenu from './components/headerMenu/headerMenu.jsx';
import MenuOpen from './components/MenuOpen/MenuOpen.jsx';
import Footer from './components/footer/footer.jsx';
import HomePage from './pages/homePage/homePage.jsx';
// import ProductPage from './pages/prodcuctPage/productPage.jsx';
import AboutPage from './pages/aboutPage/aboutPage.jsx';
import ContactsPage from './pages/contactsPage/contactsPage.jsx';
import WorkPage from './pages/workPage/workPage.jsx';
import CatalogPage from './pages/catalogPage/catalogPage.jsx';
import CookiePolicy from './pages/cookiePolicy/cookiePolicy.jsx'; // Importa la pagina della Cookie Policy
import ScrollToTop from './components/elements/scrollToTop/scrollToTop.jsx';
import './fonts.css';

function App() {
  // useEffect(() => {
  //   const consentGiven = getCookieConsentValue() === "true";
  //   if (consentGiven) {
  //     // Inizializza Google Analytics o altri script di terze parti
  //     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  //     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  //     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  //     ga('create', 'UA-XXXXX-Y', 'auto');
  //     ga('send', 'pageview');
  //   }
  // }, []);

  return (
    <>
      <Router>
        <div>
          <HeaderMenu/>
          <MenuOpen/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            {/* <Route path='/products/*' element={<ProductPage/>}/> */}
            <Route path='/works' element={<WorkPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/cookie-policy' element={<CookiePolicy/>}/> {/* Aggiungi il percorso per la Cookie Policy */}
          </Routes>
          <Footer/>
        </div>
      </Router>
      {/* <CookieConsent
        location="bottom"
        buttonText="Accetta"
        declineButtonText="Rifiuta"
        cookieName="myAwesomeCookieName"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Questo sito utilizza i cookie per migliorare l'esperienza utente.{" "}
        Leggi la nostra privacy & cookie policy. {" "}
        <a
          href="https://www.iubenda.com/privacy-policy/98946216"
          className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
          style={{ color: "#fff", textDecoration: "underline" }}
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
      </CookieConsent> */}

    </>
  );
}

export default App;
