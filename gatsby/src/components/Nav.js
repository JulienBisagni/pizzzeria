import React from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/nav.module.scss"

const Button = loadable(() => import("./Button"))

export default function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.logo}></li>
        <div className={styles.buttons}>
          <li>
            <Button to="/" label="MANGGGIARE" color="insalata" />
          </li>
          <li>
            <Button to="/blog" label="LEGGGERE" color="mozzarella" />
          </li>
          <li>
            <Button to="/" label="CLLLIENTI" color="pomodoro" />
          </li>
        </div>
      </ul>
    </nav>
  )
}
