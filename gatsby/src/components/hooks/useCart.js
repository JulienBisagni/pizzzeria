import { useState, useContext } from "react"

import { CartContext } from "../../contexts/CartContext"

export const useCart = () => {
  const { cartState, removePizzaFromCart } = useContext(CartContext)

  const [showCart, setShowCart] = useState(false)

  const openCart = () => {
    console.log("open")
    setShowCart(true)
  }

  const closeCart = () => {
    setShowCart(false)
  }
  return {
    showCart,
    openCart,
    closeCart,
    cartState,
    removePizzaFromCart,
  }
}
