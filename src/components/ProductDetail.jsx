import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()

  if (!product) return <div>Product not found</div>

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="detail-body">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => addToCart(product, 1)}>Add to cart</button>
          <Link to="/cart" className="btn outline">Go to cart</Link>
        </div>
      </div>
    </div>
  )
}
