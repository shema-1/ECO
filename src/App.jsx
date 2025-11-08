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
          <Route path="/deals" element={<ProductList category="deals" />} />
          <Route path="/new" element={<ProductList category="new" />} />
          <Route path="/trending" element={<ProductList category="trending" />} />
          <Route path="/clearance" element={<ProductList category="clearance" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
