/* eslint-disable no-nested-ternary */
import React from "react"
import Img from "gatsby-image/withIEPolyfill"

function Image({ img }) {
  const imageAlt = img?.description || img?.title || "Pizzzeria Image"
  return (
    <>
      {img?.fluid ? (
        <Img fluid={img.fluid} className="img" alt={imageAlt} />
      ) : img ? (
        <img
          loading="lazy"
          className="img"
          src={img.file?.url || img}
          alt={imageAlt}
        />
      ) : null}
    </>
  )
}

export default Image
