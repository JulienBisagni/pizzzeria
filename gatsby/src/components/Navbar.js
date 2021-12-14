import React from "react"
import loadable from "@loadable/component"

const Button = loadable(() => import("./Button"))
const Logo = loadable(() => import("./Logo"))
const Cart = loadable(() => import("./Cart"))

export default function Navbar() {
  return (
    <navbar className="navbar">
      <Logo />
      <div className="navbar__buttons">
        <Button to="/" label="MANGGGIARE" version="insalata" />
        <Button to="/blog" label="LEGGGERE" version="mozzarella" />
        <Button to="/" label="CLLLIENTI" version="pomodoro" />
      </div>
      <Cart />
    </navbar>
  )
}
