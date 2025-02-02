import React from 'react'
import HeroSection from '../sections/HeroSection'
import Footer from '../components/Footer'
import ServicesSection from '../sections/ServicesSection'
import ProjectsSection from '../sections/ProjectsSection'
import ClientsReviews from '../sections/ClientsReviews'

const Home = () => {
  return (
    <div  
      className="w-[1896px]"
      >
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsReviews />
        <Footer />
    </div>
  )
}

export default Home