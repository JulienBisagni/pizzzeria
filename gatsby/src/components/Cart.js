import React, { useContext, useState } from "react"
import { IoPizzaOutline } from "react-icons/io5"
import styles from "../styles/components/cart.module.scss"

import { CartContext } from "../contexts/CartContext"

export default function Cart() {
  const { cartState, removePizzaFromCart } = useContext(CartContext)
  const [showPizza, setShowPizza] = useState(false)

  return (
    <div className={styles.container}>
      <button onClick={() => setShowPizza(true)} className={styles.cartLength}>
        <IoPizzaOutline className={styles.icon} />
        <p className={styles.number}>{cartState.pizzas.length}</p>
      </button>
      <div className={`${styles.cart} ${showPizza ? styles.cartActive : ""}`}>
        <button type="button" onClick={() => setShowPizza(false)}>
          X
        </button>
        <h3 className={styles.cart__title}>Votre commande</h3>
        {cartState?.pizzas?.map(pizza => (
          <div key={pizza.id} className="">
            {pizza.title} {pizza.price}
            <button type="button" onClick={() => removePizzaFromCart(pizza)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
