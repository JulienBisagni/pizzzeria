import React, { useEffect, useState } from "react"
import loadable from "@loadable/component"

import { useScroll } from "./hooks/useScroll"

const Navbar = loadable(() => import("./Navbar"))
const Header = loadable(() => import("./Header"))

export default function Layout({ children }) {
  const { scroll } = useScroll()
  return (
    <div className="wrapper">
      <div className="main">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  )
}
