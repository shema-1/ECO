import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import './styles.css'

// Handle GitHub Pages SPA routing
// https://github.com/rafgraph/spa-github-pages
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/ECO">
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
)
