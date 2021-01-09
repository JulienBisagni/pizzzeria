import React from "react"
import { Link } from "gatsby"

import PizzzeriaLogo from "../images/pizzzeria.inline.svg"

import styles from "../styles/components/logo.module.scss"
import gStyles from "../styles/globalStyle.module.scss"

export default function Logo() {
  return (
    <Link to="/" className={styles.container}>
      <h1 className={styles.title}>
        <span className={gStyles.insalata}>z</span>
        <span className={gStyles.mozzarella}>z</span>
        <span className={gStyles.pomodoro}>z</span>
      </h1>
    </Link>
  )
}
