import React, { useContext } from "react"
import loadable from "@loadable/component"
import { CartContext } from "../contexts/CartContext"

import styles from "../styles/components/header.module.scss"

const Logo = loadable(() => import("./Logo"))
const Cart = loadable(() => import("./Cart"))
const PizzaHeader = loadable(() => import("./PizzaHeader"))

export default function Header({ userHasScroll }) {
  const { pizzas } = useContext(CartContext)
  return (
    <header
      className={`${styles.container} ${
        userHasScroll ? styles.hasScrolled : null
      }`}
    >
      <div className={styles.logoContainer}>
        <Logo />
        <div className={styles.pizzas}>
          {pizzas &&
            pizzas.map(pizza => <PizzaHeader key={pizza.id} pizza={pizza} />)}
        </div>

        <Cart />
      </div>
    </header>
  )
}
