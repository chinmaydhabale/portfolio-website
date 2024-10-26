import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Project from '../components/Project'
import Skills from '../components/Skills'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Project />
            <Skills />
            <About />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Home