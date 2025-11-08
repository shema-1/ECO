import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { convertToRWF, formatRWF } from '../utils/currency'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  
  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
  }

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price
    return Math.round(price * (1 - discount / 100))
  }

  const discounted = product.discount ? calculateDiscountedPrice(product.price, product.discount) : null

  return (
    <article className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
        {product.featured && <span className="featured-badge">Featured</span>}
        {product.stock !== undefined && product.stock < 10 && <span className="low-stock-badge">Only {product.stock} left</span>}
        {product.discount && <span className="discount-badge">-{product.discount}%</span>}
      </div>
      <div className="card-body">
        <div className="card-category">{product.category} {product.subcategory ? `› ${product.subcategory}` : ''}</div>
        <h3>{product.name}</h3>
        <div className="price-rating">
          <div className="price-block">
            <p className="price">{formatRWF(convertToRWF(discounted ?? product.price))}</p>
            {product.discount && (
              <p className="original-price">{formatRWF(convertToRWF(product.price))}</p>
            )}
          </div>
          <div className="rating" title={`${product.rating} out of 5 stars`}>
            {renderStars(product.rating)}
          </div>
        </div>
        <p className="desc">{product.description}</p>
        <div className="card-actions">
          <button 
            onClick={() => addToCart(product, 1)}
            className="btn primary small"
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <Link to={`/product/${product.id}`} className="btn outline small">
            Details
          </Link>
        </div>
      </div>
    </article>
  )
}
