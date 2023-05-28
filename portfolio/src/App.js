import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import React, { useState, useEffect } from 'react';


function App() {

  const [navBg, setNavBg] = useState(false);
  // const isHome = props.name === 'Homepage' ? true : false;
  const isHome = true; // for testing purposes

  const changeNavBg = e => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <div>
      <NavBar {...(isHome && navBg ? { backgroundColor: '#0008' } : {})} />
      <Home />
      <About />
      <Portfolio />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
