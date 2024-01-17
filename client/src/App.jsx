import './App.css'
import Website from './pages/Website'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Properties from './pages/Properties';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import {ReactQueryDevtools} from 'react-query/devtools'
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/Property';


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>

        <Router>
          <Suspense fallback={<div>Loding...</div>} >
            <Navbar />
            <Routes>
              <Route path='/' element={<Website />} />
              <Route path='/properties' element={<Properties />} />
              <Route path='/properties/:propertyId' element={<Property />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

            </Routes>
            <Footer />
          </Suspense>
        </Router>
        <ToastContainer/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
