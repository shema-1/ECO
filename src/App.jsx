import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:category/:subcategory?" element={<ProductList />} />
          <Route path="/deals" element={<ProductList />} />
          <Route path="/new" element={<ProductList />} />
          <Route path="/trending" element={<ProductList />} />
          <Route path="/clearance" element={<ProductList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// Debug: Log when App renders
console.log('App component loaded')
