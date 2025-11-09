import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { convertToRWF, formatRWF } from '../utils/currency'

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', address: '' })

  function submit(e) {
    e.preventDefault()
    // In a real app you'd call your backend here. We'll simulate success.
    console.log('Order placed', { form, cart })
    clearCart()
    navigate('/')
    alert('Order placed! Thank you.')
  }

  if (cart.length === 0) return (
    <div className="container" style={{padding: '32px 16px', textAlign: 'center'}}>
      <h1>No items to checkout</h1>
      <Link to="/" className="btn primary" style={{marginTop: '24px', display: 'inline-block'}}>Continue shopping</Link>
    </div>
  )

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={submit} className="checkout-form">
        <label>
          Full name
          <input 
            type="text"
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
            required 
            placeholder="Enter your full name"
          />
        </label>
        <label>
          Email
          <input 
            type="email" 
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 
            required 
            placeholder="Enter your email"
          />
        </label>
        <label>
          Shipping address
          <textarea 
            value={form.address} 
            onChange={e => setForm({...form, address: e.target.value})} 
            required 
            placeholder="Enter your shipping address"
            rows="4"
          />
        </label>
        <div className="checkout-summary">
          <p>Total: <strong>{formatRWF(convertToRWF(totalPrice))}</strong></p>
        </div>
        <div className="detail-actions">
          <button className="btn primary" type="submit">Place order</button>
        </div>
      </form>
    </div>
  )
}
