import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categoryStructure } from '../data/products'

export default function Header() {
  const { totalItems, totalPrice } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = Object.keys(categoryStructure)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsCategoryOpen(false)
    setActiveCategory(null)
    document.body.classList.remove('menu-open')
  }

  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    if (newState) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [])

  return (
    <header className="site-header">
      <div className="announcement-bar">
        🇷🇼 Free delivery in Kigali on orders over 100,000 RWF
      </div>
      
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <a href="tel:+250700000000">📞 +250 700 000 000</a>
            <a href="mailto:support@rwandamarket.com">✉️ support@rwandamarket.com</a>
          </div>
          <div className="top-bar-right">
            <Link to="/track-order">Track Order</Link>
            <Link to="/stores">Find Stores</Link>
            <select className="language-select">
              <option value="en">English</option>
              <option value="rw">Kinyarwanda</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-inner">
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Rwanda</span>
            <span className="logo-market">Market</span>
          </Link>

          <div className="search-bar">
            <select className="search-category">
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input 
              type="search" 
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="header-actions">
            <Link to="/wishlist" className="wishlist-btn" aria-label="Wishlist">
              ❤️ <span className="count">0</span>
            </Link>
            <Link to="/cart" className="cart-btn" aria-label="Cart">
              🛒 <span className="cart-count">{totalItems}</span>
            </Link>
            <Link to="/account" className="account-btn" aria-label="Account">
              👤 <span>Account</span>
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        />
      )}

      <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <div 
            className="mega-menu"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <button className="category-btn">
              <span className="menu-icon">☰</span>
              All Categories
            </button>
            
            {isCategoryOpen && (
              <div className="mega-content">
                <div className="category-list">
                  {categories.map(category => (
                    <div
                      key={category}
                      className={`category-item ${activeCategory === category ? 'active' : ''}`}
                      onMouseEnter={() => setActiveCategory(category)}
                      onClick={() => setActiveCategory(category === activeCategory ? null : category)}
                    >
                      {category} <span className="arrow">▸</span>
                    </div>
                  ))}
                </div>
                
                {activeCategory && (
                  <div className="subcategory-content">
                    <h3>{activeCategory}</h3>
                    <div className="subcategory-grid">
                      <div className="subcategories">
                        <h4>Subcategories</h4>
                        {categoryStructure[activeCategory].subcategories.map(sub => (
                          <Link 
                            key={sub}
                            to={`/category/${encodeURIComponent(activeCategory)}/${encodeURIComponent(sub.toLowerCase().replace(/\s+/g, '-'))}`}
                            onClick={() => {
                              setIsCategoryOpen(false)
                              closeMenu()
                            }}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                      <div className="featured-items">
                        <h4>Featured</h4>
                        {categoryStructure[activeCategory].featured.map(item => (
                          <Link 
                            key={item}
                            to={`/category/${encodeURIComponent(activeCategory)}`}
                            className="featured-item"
                            onClick={closeMenu}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="nav-links">
            <Link to="/deals" className="nav-link" onClick={closeMenu}>
              <span className="icon">🔥</span> Flash Deals
            </Link>
            <Link to="/new" className="nav-link" onClick={closeMenu}>New Arrivals</Link>
            <Link to="/trending" className="nav-link" onClick={closeMenu}>Trending</Link>
            <Link to="/clearance" className="nav-link special" onClick={closeMenu}>Clearance Sale</Link>
          </div>

          <div className="nav-extra">
            <Link to="/sell" className="seller-link" onClick={closeMenu}>Sell on Rwanda Market</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
