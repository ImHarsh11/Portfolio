import Navbar from './components/navbar'
import './App.css'
import HeroPage from './components/HeroPage'
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/Experience'
import './Experience.css'
import ContactPage from './components/ContactPage'
import React, { useEffect, useState } from "react";
import Preloader from './components/Preloader'
import ProjectTab from './components/Projects'
<<<<<<< HEAD
import FooterSection from './components/FooterSec'
=======
import  FooterSection from './components/FooterSec'
>>>>>>> df2e70b31698d7cf642fdb9fd119bcb3f608c1dc
import SkillsStack from './components/Skills'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div 
        >
          {/* Cursor spotlight effect */}
          <div 
           
          />
          
          <main>
            <Navbar />
            <HeroPage />
            <AboutPage />
            <ExperiencePage /> 
            <SkillsStack />
            <ProjectTab />
            <ContactPage />
            <FooterSection />
          </main>
        </div>
      )}
    </>
  )
}

export default App