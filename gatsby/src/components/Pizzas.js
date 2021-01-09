import React from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/pizzas.module.scss"

const Pizza = loadable(() => import("../components/Pizza"))

export default function Pizzas() {
  return (
    <div className={styles.pizzas}>
      <Pizza
        title="Margheritada"
        toppings="mozzarellaDOP, Pomodoro, basilico"
        price="8,50"
      />
      <Pizza
        title="Margheritada"
        toppings="mozzarellaDOP, Pomodoro, basilico"
        price="8,50"
      />
      <Pizza
        title="Margheritada"
        toppings="mozzarellaDOP, Pomodoro, basilico"
        price="8,50"
      />
    </div>
  )
}
