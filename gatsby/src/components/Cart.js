import React from "react"
import loadable from "@loadable/component"

import { IoPizzaOutline } from "react-icons/io5"

import styles from "../styles/components/cart.module.scss"

function Cart() {
  return (
    <div className={styles.container}>
      <button onClick={console.log("Add pizza")}>Add pizza</button>
      <IoPizzaOutline className={styles.icon} />
      <p className={styles.number}>2</p>
    </div>
  )
}
