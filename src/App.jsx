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
import Footer from './components/footer'
import SkillsStack from './components/Skills'
import BodyBackgroundImage from './assets/BackgroundImage.jpg'

function App() {
    const [loading, setLoading] = useState(true);
  
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
      ) :(
       <div>
    <main  >
    <Navbar />
      <HeroPage/>
      <AboutPage/>
      <ExperiencePage/> 
      <SkillsStack/>
      <ProjectTab/>
      <ContactPage/>
      <Footer/>
    </main>
       </div>
      )
}
    </>
  )
}

export default App
