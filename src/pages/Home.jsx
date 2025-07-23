import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Body from '../components/Body'
import Contact from '../components/Contact'
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Body/>
      <Contact />
    </div>
  )
}

export default Home
