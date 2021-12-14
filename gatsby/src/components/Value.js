import { Link } from "gatsby"
import React from "react"
import styles from "../styles/components/value.module.scss"

export default function Value({ title, description }) {
  return (
    <Link to="/">
      <div className="value">
        <h3 className="value__title">{title}</h3>
        <p className="value__description">{description}</p>
      </div>
    </Link>
  )
}
