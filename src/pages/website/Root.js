import { useState, useEffect, useRef } from 'react';

import Navbar from "components/website/Navbar";
import HomeSection from "components/website/section/HomeSection";
import AboutSection from 'components/website/section/AboutSection';
import ContactSection from 'components/website/section/ContactSection';

import 'styles/Website.css'
/*https://www.behance.net/gallery/140168573/Full-Stack-Developer-Portfolio-Website*/
const Root = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const navRefs = { homeRef, aboutRef, contactRef }

  const scrollToSec = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  document.body.setAttribute('id', 'website-page');
  return (
    <>
      <div id='website'>
        <Navbar
          scrollToSec={scrollToSec}
          navRefs={navRefs}
        />
        <HomeSection homeRef={homeRef} />
        <AboutSection aboutRef={aboutRef} />
        <ContactSection contactRef={contactRef} />
      </div>
    </>
  )
}

export default Root;