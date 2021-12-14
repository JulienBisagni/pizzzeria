import React, { useContext } from "react"
import loadable from "@loadable/component"
import { CartContext } from "../contexts/CartContext"

const Logo = loadable(() => import("./Logo"))
const Cart = loadable(() => import("./Cart"))
const PizzaButton = loadable(() => import("./PizzaButton"))

export default function Header({ userHasScroll }) {
  const { pizzas } = useContext(CartContext)
  return (
    <header className={`header ${userHasScroll ? "--scroll" : ""}`}>
      <Logo />
      <div className="header__pizzas">
        {pizzas &&
          pizzas.map(pizza => <PizzaButton key={pizza.id} pizza={pizza} />)}
      </div>
      <Cart />
    </header>
  )
}
