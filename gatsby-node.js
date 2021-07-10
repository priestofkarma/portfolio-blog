const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const queryPages = await graphql(`
    query {
      queryProject: allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}) {
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
      queryNotes: allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}}) {
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
      projectTags: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }


    }
  `)

  // handle errors
  if (queryPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const projects = queryPages.data.queryProject.edges
  const singleProjectTemplate = path.resolve(`./src/templates/single-project.js`);
  projects.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: singleProjectTemplate,
      context: { id: node.id },
    })
  })

  const posts = queryPages.data.queryNotes.edges
  const singlePostTemplate = path.resolve(`./src/templates/single-post.js`);
  posts.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: singlePostTemplate,
      context: { id: node.id },
    })
  })

  const tags = queryPages.data.projectTags.group
  const tagTemplate = path.resolve(`./src/templates/project-tags.js`);

  tags.forEach(node => {
    createPage({
      path: `/tags/${_.kebabCase(node.fieldValue)}`,
      component: tagTemplate,
      context: { tag: node.fieldValue },
    })
  })
}