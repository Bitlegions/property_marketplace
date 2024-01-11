import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Residencies from './components/Residencies';

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Residencies />
        <Footer />
    </>
  )
}

export default App
