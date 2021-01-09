import { Link } from "gatsby"
import React from "react"
import styles from "../styles/components/value.module.scss"

export default function Value({ title, children }) {
  return (
    <Link to="/">
      <div className={styles.container}>
        <h3>{title}</h3>
        {children}
      </div>
    </Link>
  )
}
