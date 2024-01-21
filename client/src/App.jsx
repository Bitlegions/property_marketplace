import './App.css'
import Website from './pages/Website'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from 'react';
import Properties from './pages/Properties';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools'
import "react-toastify/dist/ReactToastify.css";
import Property from './pages/Property';
import UserDetailContext from './context/UserDetailContext';
import Layout from './components/Layout';


function App() {
  const queryClient = new QueryClient();
  const [userDetails, setuserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  })

  console.log(userDetails);

  return (
    <React.StrictMode>
      <UserDetailContext.Provider value={{ userDetails, setuserDetails }}>
        <QueryClientProvider client={queryClient}>
          
          <Router>
            <Suspense fallback={<div>Loding...</div>} >
                <Routes>
                  <Route element={<Layout />} >

                  <Route path='/' element={<Website />} />
                  <Route path='/properties' element={<Properties />} />
                  <Route path='/properties/:propertyId' element={<Property />} />

                  </Route>
                </Routes>
            </Suspense>
          </Router>
          
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserDetailContext.Provider>
    </React.StrictMode>
  )
}

export default App
