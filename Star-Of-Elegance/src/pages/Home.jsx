import React from 'react'
import HeroSection from '../sections/HeroSection'
import Footer from '../components/Footer'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
    </div>
  )
}

export default Home