import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

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
    <div>
      <h1>No items to checkout</h1>
    </div>
  )

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={submit} className="checkout-form">
        <label>
          Full name
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        </label>
        <label>
          Shipping address
          <textarea value={form.address} onChange={e => setForm({...form, address: e.target.value})} required />
        </label>
        <div className="checkout-summary">
          <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        </div>
        <div className="actions">
          <button className="btn primary" type="submit">Place order</button>
        </div>
      </form>
    </div>
  )
}
