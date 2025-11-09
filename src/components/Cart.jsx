import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { convertToRWF, formatRWF } from '../utils/currency'

export default function Cart() {
  const { cart, updateQty, removeFromCart, totalPrice, clearCart } = useCart()

  if (cart.length === 0) return (
    <div className="container" style={{padding: '32px 16px', textAlign: 'center'}}>
      <h1 style={{marginBottom: '24px'}}>Your cart is empty</h1>
      <Link to="/" className="btn primary">Continue shopping</Link>
    </div>
  )

  return (
    <div className="container" style={{padding: '16px'}}>
      <h1 style={{marginBottom: '24px'}}>Your Cart</h1>
      <div className="cart-list">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-body">
              <h3>{item.name}</h3>
              <p className="price">
                {formatRWF(convertToRWF(item.price * item.qty))} 
                <span className="unit" style={{fontSize: '14px', color: 'var(--muted)', marginLeft: '8px'}}>
                  ({formatRWF(convertToRWF(item.price))} ea)
                </span>
              </p>
              <div className="qty">
                <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} aria-label="Decrease quantity">-</button>
                <input type="number" value={item.qty} readOnly min="1" />
                <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
              </div>
              <div className="cart-actions">
                <button className="btn small outline" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: <strong>{formatRWF(convertToRWF(totalPrice))}</strong></p>
        <div className="summary-actions">
          <button className="btn outline" onClick={() => clearCart()}>Clear cart</button>
          <Link to="/checkout" className="btn primary">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
