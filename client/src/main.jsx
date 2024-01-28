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
          // redirect_uri: "https://property-marketplace-client-qs6rc84sl-bitlegions-projects.vercel.app"
          redirect_uri: "http://localhost:5173"
        }}
        audience="http://localhost:5555"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>,
)
