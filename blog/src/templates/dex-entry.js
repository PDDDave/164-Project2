import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const DexEntry = ({ data }) => {
    const { pokemonName } = data.contentfulDexEntry;

    return (
        <Layout>
            <h1>{pokemonName}</h1>
        </Layout>
    );
}

export default DexEntry;

export const pageQuery = graphql`
    query dexEntryQuery($slug: String!) {
        contentfulDexEntry(slug: {eq: $slug}) {
            pokemonName
            slug
        }
    }
`