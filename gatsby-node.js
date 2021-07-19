const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const queryPages = await graphql(`
    query {
      queryProject: allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}
      sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            slug
            frontmatter {
              path
              title
            }
          }
        }
      }
      queryNotes: allMdx(filter: {fileAbsolutePath: {regex: "/content/notes/"}}
      sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            slug
            frontmatter {
              path
              title
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

    const prev = index === 0 ? null : projects[index - 1];
    const next = index === projects.length - 1 ? null : projects[index + 1];

    createPage({
      path: `${node.frontmatter.path}`,
      component: singleProjectTemplate,
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })

  const posts = queryPages.data.queryNotes.edges

  const singlePostTemplate = path.resolve(`./src/templates/single-post.js`);

  posts.forEach(({ node }, index) => {

    const prev = index === 0 ? null : posts[index - 1];
    const next = index === posts.length - 1 ? null : posts[index + 1];

    createPage({
      path: `${node.frontmatter.path}`,
      component: singlePostTemplate,
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })

  const tags = queryPages.data.projectTags.group
  const tagTemplate = path.resolve(`./src/templates/tags-page.js`);

  tags.forEach(node => {
    createPage({
      path: `/tags/${_.kebabCase(node.fieldValue)}`,
      component: tagTemplate,
      context: { tag: node.fieldValue },
    })
  })
}