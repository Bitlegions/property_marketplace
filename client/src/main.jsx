import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { MantineProvider } from '@mantine/core';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <Auth0Provider
        domain="dev-1a054bt7u1homz70.us.auth0.com"
        clientId="AyXRwpBCxNyAwM7aUQfKPDXsKB50Sy0g"
        authorizationParams={{
          redirect_uri: "https://property-marketplace-client-em5cx689p-bitlegions-projects.vercel.app"
        }}
        audience="http://localhost:5555"
        // audience = "https://property-marketplace-server-6i7hf2l2u-bitlegions-projects.vercel.app"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>,
)
