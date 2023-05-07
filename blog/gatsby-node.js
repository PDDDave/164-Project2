const path = require(`path`);

exports.createPages = async ({ graphql, actions }) =>  {
  const { createPage } = actions
  return new Promise((resolve, reject)=> {
    graphql(`
      {
        allContentfulDexEntry {
          edges {
            node{
              id
              slug
            }
          }
        }
      }
    `).then(result=> {
      if(result.errors){
        reject(result.errors)
      }
      result.data.allContentfulDexEntry.edges.forEach((edge) => {
        createPage({
          path: edge.node.slug,
          component: require.resolve("./src/templates/dex-entry.js"),
          context: {
            slug: edge.node.slug
          },
          defer: true,
        })
      })
      resolve()
    })
  })
}                                                                            