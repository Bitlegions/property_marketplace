import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Residencies from '../components/Residencies';
import Footer from '../components/Footer';

const Website = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Residencies />
      <Footer />
    </>
  )
}

export default Website