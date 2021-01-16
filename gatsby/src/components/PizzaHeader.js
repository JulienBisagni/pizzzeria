import React, { useContext } from "react"

import styles from "../styles/components/pizzaHeader.module.scss"
import { CartContext } from "../contexts/CartContext"

export default function PizzaHeader({ pizza }) {
  const { addPizzaToCart } = useContext(CartContext)
  return (
    <button
      type="button"
      key={pizza.id}
      onClick={() => addPizzaToCart(pizza)}
      className={styles.container}
    >
      {pizza.abrev}
    </button>
  )
}
