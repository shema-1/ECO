import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import { convertToRWF, formatRWF } from '../utils/currency'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()

  if (!product) return (
    <div className="container" style={{padding: '32px 16px', textAlign: 'center'}}>
      <h1>Product not found</h1>
      <Link to="/" className="btn primary" style={{marginTop: '24px', display: 'inline-block'}}>Back to products</Link>
    </div>
  )

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price
    return Math.round(price * (1 - discount / 100))
  }

  const discounted = product.discount ? calculateDiscountedPrice(product.price, product.discount) : null

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-body">
        <div style={{color: 'var(--muted)', fontSize: '14px', marginBottom: '8px'}}>
          {product.category} {product.subcategory ? `› ${product.subcategory}` : ''}
        </div>
        <h2>{product.name}</h2>
        <div style={{marginBottom: '16px'}}>
          <p className="price">{formatRWF(convertToRWF(discounted ?? product.price))}</p>
          {product.discount && (
            <p className="original-price" style={{marginTop: '4px'}}>
              {formatRWF(convertToRWF(product.price))}
            </p>
          )}
        </div>
        <p>{product.description}</p>
        <div className="detail-actions">
          <button 
            className="btn primary" 
            onClick={() => addToCart(product, 1)}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to cart' : 'Out of Stock'}
          </button>
          <Link to="/cart" className="btn outline">Go to cart</Link>
        </div>
      </div>
    </div>
  )
}
