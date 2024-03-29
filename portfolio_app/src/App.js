import './App.css';
import React from 'react';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';



const App = () => {

  return (
    <>
      <main className='flex min-h-screen flex-col bg-[#121212]'>
        <Navbar />
        <div className='container mx-auto px-12 py-4 text-white mt-24'>
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>




  );
}

export default App;
