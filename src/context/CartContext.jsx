import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product, qty = 1) {
    setCart(prev => {
      const idx = prev.findIndex((p) => p.id === product.id)
      if (idx === -1) return [...prev, { ...product, qty }]
      const copy = [...prev]
      copy[idx].qty += qty
      return copy
    })
  }

  function removeFromCart(productId) {
    setCart(prev => prev.filter(p => p.id !== productId))
  }

  function updateQty(productId, qty) {
    setCart(prev => prev.map(p => p.id === productId ? { ...p, qty } : p))
  }

  function clearCart() {
    setCart([])
  }

  const totalItems = cart.reduce((s, p) => s + p.qty, 0)
  const totalPrice = cart.reduce((s, p) => s + p.qty * p.price, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
