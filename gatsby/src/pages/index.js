import React from "react"
import loadable from "@loadable/component"

const SEO = loadable(() => import("../components/SEO"))
const Pizzas = loadable(() => import("../components/Pizzas"))

export default function Home({ data }) {
  return (
    <>
      <SEO title="Pizzzeria" />
      <Pizzas />
    </>
  )
}
