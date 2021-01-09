import React, { useEffect, useState } from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/layout.module.scss"

const Nav = loadable(() => import("./Nav"))
const Header = loadable(() => import("./Header"))

export default function Layout({ children }) {
  // DETECT USER SCROLLING
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return (
    <>
      <Header userHasScroll={scroll} />
      <div className={styles.container}>
        <div>{children}</div>
      </div>
      <Nav />
    </>
  )
}
