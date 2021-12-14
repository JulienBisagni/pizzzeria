import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

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
      <div className="pizza">
        <h2 className="pizza__title">{title}</h2>
        <p className="pizza__toppings">{toppings}</p>
        <p className="pizza__price">{price}€</p>
      </div>
    </Link>
  )
}
