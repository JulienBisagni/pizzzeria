import React from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/pizza.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
const Logo = loadable(() => import("./Logo"))

export default function Pizza({ title, toppings, price, slug = "" }) {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "pizzzeria-background-1" }) {
        name
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
        publicURL
      }
    }
  `)

  return (
    <Link to={`/${slug}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <p className={styles.toppings}>{toppings}</p>

          <p className={styles.price}>{price}€</p>
        </div>
      </div>
    </Link>
  )
}
