import React, { useState } from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/header.module.scss"

const Logo = loadable(() => import("./Logo"))
const Cart = loadable(() => import("./Cart"))
const PizzaHeader = loadable(() => import("./PizzaHeader"))

export default function Header({ userHasScroll }) {
  const [numberOfPizzas, setNumberOfPizzas] = useState(0)
  const handleClick = () => {
    setNumberOfPizzas(numberOfPizzas + 1)
  }
  return (
    <header
      className={`${styles.container} ${
        userHasScroll ? styles.hasScrolled : null
      }`}
    >
      <div className={styles.logoContainer}>
        <Logo />
        <div className={styles.pizzas}>
          <PizzaHeader title="MGT" handleClick={handleClick} />
          <PizzaHeader title="MGT" handleClick={handleClick} />
          <PizzaHeader title="MGT" handleClick={handleClick} />
        </div>

        <Cart />
      </div>
    </header>
  )
}
