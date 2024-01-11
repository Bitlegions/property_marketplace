import './App.css'
import Website from './pages/Website'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login'
import Signup from './components/Signup'
import Properties from './pages/Properties';


function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loding...</div>} >
          <Navbar/>
        <Routes>
            <Route path='/' element={<Website />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />

        </Routes>
        <Footer/>
        </Suspense>
      </Router>
    </>
  )
}

export default App
