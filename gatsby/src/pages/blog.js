import React from "react"
import loadable from "@loadable/component"

import { graphql } from "gatsby"

const SEO = loadable(() => import("../components/SEO"))
const Grid = loadable(() => import("../components/Grid"))

export default function Blog({ data }) {
  const posts = data.allPosts.edges

  return (
    <>
      <SEO title="Pizzeria" />
      <div>PIZZZERIA</div>
      <Grid>
        {posts &&
          posts.map((p, index) => (
            <h1 key={index}>{p.node.frontmatter.title}</h1>
          ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 280)
          wordCount {
            paragraphs
            sentences
            words
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
