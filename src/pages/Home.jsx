import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Project from '../components/Project'
import Skills from '../components/Skills'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Project />
            <Skills />
        </div>
    )
}

export default Home