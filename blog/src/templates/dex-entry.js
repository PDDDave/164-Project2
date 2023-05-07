import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image"
import { H1 } from '../components/Heading'


const DexEntry = ({ data }) => {
    const { pokemonName, monsterNumber, monsterBio, heroImage, region, type } = data.contentfulDexEntry;

    return (
        <Layout>
            <H1>{pokemonName}</H1>
            <h3> #{monsterNumber} </h3>
            <div>
                <GatsbyImage
                    image ={heroImage.gatsbyImageData} 
                />
            </div>
            <p><b>Type:</b> {type}</p>
            <p><b>Native region:</b> {region}</p>
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
            region
            type
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