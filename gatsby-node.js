const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  const singleProjectTemplate = path.resolve(`./src/templates/single-project.js`);
  posts.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: singleProjectTemplate,
      context: { id: node.id },
    })
  })
}