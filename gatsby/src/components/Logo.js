import React from "react"
import { Link } from "gatsby"
import loadable from "@loadable/component"

import PizzzeriaLogo from "../images/pizzzeria-logo.jpg"

const Image = loadable(() => import("./Image"))

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <Image img={PizzzeriaLogo} />
      </Link>
    </div>
  )
}
