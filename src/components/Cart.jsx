import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cart, updateQty, removeFromCart, totalPrice, clearCart } = useCart()

  if (cart.length === 0) return (
    <div>
      <h1>Your cart is empty</h1>
      <Link to="/" className="btn">Continue shopping</Link>
    </div>
  )

  return (
    <div>
        
      <h1>Your Cart</h1>
      <div className="cart-list">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-body">
              <h3>{item.name}</h3>
              <p className="price">${(item.price * item.qty).toFixed(2)} <span className="unit">(${item.price.toFixed(2)} ea)</span></p>
              <div className="qty">
                <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                <input value={item.qty} readOnly />
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
              <div className="cart-actions">
                <button className="btn small" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        <div className="summary-actions">
          <button className="btn" onClick={() => clearCart()}>Clear cart</button>
          <Link to="/checkout" className="btn primary">Checkout</Link>
        </div>
      </div>
    </div>
  )
}
