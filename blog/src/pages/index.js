import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home"/>
    <ul className={styles.list}>
      {
        data.allContentfulDexEntry.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>#{edge.node.monsterNumber} - {edge.node.pokemonName}</Link>
            <div>
              <GatsbyImage
                image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
            <div>
              {edge.node.description.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))

      }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql `
{
      allContentfulDexEntry {
        edges{
          node{
            id
            monsterNumber
            pokemonName
            slug
            description{
              childMarkdownRemark{
                excerpt
              }
            }
            heroImage{
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width:300
              )
            }
          }
        }
      }
    }
`
