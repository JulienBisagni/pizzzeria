import React from "react"
import { Link } from "gatsby"

import styles from "../styles/components/button.module.scss"

export default function Button({
  to,
  href,
  color = "pomodoro",
  label,
  children,
  ...props
}) {
  return (
    <div
      className={`${styles.container} ${
        color === "primary" ? styles.primary : styles[color]
      }`}
    >
      {to ? (
        <Link to={to}>
          {label} {children}
        </Link>
      ) : href ? (
        <a target="_blank" rel="noreferrer" href={href}>
          {label} {children}
        </a>
      ) : (
        <button type="button">
          {label}
          {children}
        </button>
      )}
    </div>
  )
}
