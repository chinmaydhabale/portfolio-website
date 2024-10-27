import './App.css'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Blogs from './pages/Blogs.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </>
  )
}

export default App
