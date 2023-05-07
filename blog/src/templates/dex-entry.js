import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image"

const DexEntry = ({ data }) => {
    const { pokemonName, monsterNumber, monsterBio, heroImage } = data.contentfulDexEntry;

    return (
        <Layout>
            <h1>{pokemonName}</h1>
            <div>
                <GatsbyImage
                    image ={heroImage.gatsbyImageData} 
                />
            </div>
            <div dangerouslySetInnerHTML={{__html: monsterBio.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default DexEntry;

export const pageQuery = graphql`
    query dexEntryQuery($slug: String!) {
        contentfulDexEntry(slug: {eq: $slug}) {
            pokemonName
            monsterNumber
            slug
        monsterBio{
          childMarkdownRemark {
            html
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
`