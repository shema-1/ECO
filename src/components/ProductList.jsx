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
    }
  }, [urlCategory, urlSubcategory])

  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) {
      console.warn('No products found')
      return []
    }
    
    return products
      .filter(p => 
        !search || 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .filter(p => selectedSubcategory === 'All' || p.subcategory === selectedSubcategory)
      .filter(p => {
        const price = p.price || 0
        return price >= selectedPriceRange.min && price <= selectedPriceRange.max
      })
      .filter(p => !inStock || (p.stock !== undefined && p.stock > 0))
      .filter(p => !onlyFeatured || p.featured)
      .sort((a, b) => {
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
        Showing {filteredProducts.length} products
      </div>

      <div className="product-grid">
        {filteredProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
