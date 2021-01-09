import React from "react"

import styles from "../styles/components/grid.module.scss"

export default function Grid({ children }) {
  return <div className={styles.container}>{children}</div>
}
