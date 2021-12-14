import React from "react"

import { CartProvider } from "./src/contexts/CartProvider"

import "./src/styles/app.scss"

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)
