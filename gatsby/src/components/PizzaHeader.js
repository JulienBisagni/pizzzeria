import React from "react"

import styles from "../styles/components/pizzaHeader.module.scss"

export default function PizzaHeader({ title, toppings, price, handleClick }) {
  return (
    <button
      className={styles.container}
      type="button"
      onClick={handleClick}
    ></button>
  )
}
