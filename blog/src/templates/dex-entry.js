import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const DexEntry = ({ data }) => {
    const { pokemonName, monsterNumber, monsterBio } = data.contentfulDexEntry;

    return (
        <Layout>
            <h1>{pokemonName}</h1>
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
      }
    }
`