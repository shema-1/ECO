import React, { useState, useMemo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from './ProductCard'

const categories = [...new Set(products.map(p => p.category))]
const subcategories = [...new Set(products.map(p => p.subcategory))]
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under 50,000 RWF', min: 0, max: 50000 },
  { label: '50,000 - 100,000 RWF', min: 50000, max: 100000 },
  { label: '100,000 - 200,000 RWF', min: 100000, max: 200000 },
  { label: 'Over 200,000 RWF', min: 200000, max: Infinity }
]

export default function ProductList({ category: propCategory }) {
  const { category: urlCategory, subcategory: urlSubcategory } = useParams()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSubcategory, setSelectedSubcategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState('featured')
  const [inStock, setInStock] = useState(false)
  const [onlyFeatured, setOnlyFeatured] = useState(false)

  // Update category from URL params
  useEffect(() => {
    if (urlCategory) {
      const decodedCategory = decodeURIComponent(urlCategory).replace(/-/g, ' ')
      // Find matching category (case-insensitive, handle spaces)
      const matchedCategory = categories.find(cat => 
        cat.toLowerCase() === decodedCategory.toLowerCase() ||
        cat.toLowerCase().replace(/\s+/g, '-') === decodedCategory.toLowerCase()
      )
      if (matchedCategory) {
        setSelectedCategory(matchedCategory)
      }
    } else {
      setSelectedCategory('All')
    }
    if (urlSubcategory) {
      const decodedSubcategory = decodeURIComponent(urlSubcategory).replace(/-/g, ' ')
      const matchedSubcategory = subcategories.find(sub => 
        sub.toLowerCase() === decodedSubcategory.toLowerCase() ||
        sub.toLowerCase().replace(/\s+/g, '-') === decodedSubcategory.toLowerCase()
      )
      if (matchedSubcategory) {
        setSelectedSubcategory(matchedSubcategory)
      }
    } else {
      setSelectedSubcategory('All')
    }
  }, [urlCategory, urlSubcategory, categories, subcategories])

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) {
      console.warn('No products found')
      return []
    }
    
    let filtered = products
    
    // Search filter
    if (search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
    }
    
    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }
    
    // Subcategory filter
    if (selectedSubcategory !== 'All') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory)
    }
    
    // Price range filter
    filtered = filtered.filter(p => {
      const price = p.price || 0
      return price >= selectedPriceRange.min && price <= selectedPriceRange.max
    })
    
    // Stock filter
    if (inStock) {
      filtered = filtered.filter(p => p.stock !== undefined && p.stock > 0)
    }
    
    // Featured filter
    if (onlyFeatured) {
      filtered = filtered.filter(p => p.featured)
    }
    
    // Sort
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priceLow':
          return (a.price || 0) - (b.price || 0)
        case 'priceHigh':
          return (b.price || 0) - (a.price || 0)
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      }
    })
  }, [search, selectedCategory, selectedSubcategory, selectedPriceRange, sortBy, inStock, onlyFeatured])

  // Today's deals (discounted items)
  const dealProducts = useMemo(() => products.filter(p => p.discount && p.discount > 0), [])

  return (
    <div className="product-list">
      {dealProducts.length > 0 && (
        <section className="deals-section">
          <h2>Today's Deals</h2>
          <div className="deals-row">
            {dealProducts.map(p => (
              <div key={p.id} className="deal-item">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="filters">
        <input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        
        <div className="filter-group">
          <select 
            value={selectedCategory}
            onChange={e => {
              setSelectedCategory(e.target.value)
              setSelectedSubcategory('All')
            }}
            className="filter-select"
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select 
            value={selectedSubcategory}
            onChange={e => setSelectedSubcategory(e.target.value)}
            className="filter-select"
            disabled={selectedCategory === 'All'}
          >
            <option value="All">All Subcategories</option>
            {subcategories
              .filter(sub => {
                if (selectedCategory === 'All') return true
                return products.some(p => p.category === selectedCategory && p.subcategory === sub)
              })
              .map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))
            }
          </select>

          <div className="filter-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={inStock}
                onChange={e => setInStock(e.target.checked)}
              />
              In Stock Only
            </label>
            <label>
              <input
                type="checkbox"
                checked={onlyFeatured}
                onChange={e => setOnlyFeatured(e.target.checked)}
              />
              Featured Items
            </label>
          </div>

          <select 
            value={JSON.stringify(selectedPriceRange)}
            onChange={e => setSelectedPriceRange(JSON.parse(e.target.value))}
            className="filter-select"
          >
            {priceRanges.map((range, i) => (
              <option key={i} value={JSON.stringify(range)}>{range.label}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="results-info">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        {filteredProducts.length === 0 && products.length > 0 && (
          <span style={{color: 'var(--muted)', fontSize: '14px', marginLeft: '8px'}}>
            (Try adjusting your filters)
          </span>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{textAlign: 'center', padding: '48px 16px', color: 'var(--muted)'}}>
          <p style={{fontSize: '18px', marginBottom: '8px'}}>No products found</p>
          <p style={{fontSize: '14px'}}>Try adjusting your search or filter criteria</p>
          <button 
            className="btn primary" 
            style={{marginTop: '16px'}}
            onClick={() => {
              setSearch('')
              setSelectedCategory('All')
              setSelectedSubcategory('All')
              setSelectedPriceRange(priceRanges[0])
              setInStock(false)
              setOnlyFeatured(false)
            }}
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
