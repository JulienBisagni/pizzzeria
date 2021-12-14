import React, { useContext } from "react"

import { CartContext } from "../contexts/CartContext"
import loadable from "@loadable/component"

const Button = loadable(() => import("./Button"))

export default function PizzaButton({ pizza }) {
  const { addPizzaToCart } = useContext(CartContext)
  return (
    <Button
      onClick={() => addPizzaToCart(pizza)}
      label={pizza.title}
      version="text"
    />
  )
}
