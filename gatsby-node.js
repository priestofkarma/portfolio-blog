const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // объеденить запросы
  const queryProject = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/projects/"}}) {
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

  const queryBlogPosts = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
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

  // filter: {fileAbsolutePath: {regex: "/content/projects/"}}
  const projectTags = await graphql(`
    {
      allMdx(
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  // handle errors
  if (queryProject.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  if (queryBlogPosts.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  if (projectTags.errors) {
    reporter.panicOnBuild(`🚨  ERROR: Loading "createPages" query`)
  }

  const projects = queryProject.data.allMdx.edges
  const singleProjectTemplate = path.resolve(`./src/templates/single-project.js`);
  projects.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: singleProjectTemplate,
      context: { id: node.id },
    })
  })

  const posts = queryBlogPosts.data.allMdx.edges
  const singlePostTemplate = path.resolve(`./src/templates/single-post.js`);
  posts.forEach(({ node }, index) => {
    createPage({
      path: `${node.frontmatter.path}`,
      component: singlePostTemplate,
      context: { id: node.id },
    })
  })

  const tags = projectTags.data.allMdx.group
  const tagTemplate = path.resolve(`./src/templates/project-tags.js`);

  tags.forEach(node => {
    createPage({
      path: `/tags/${_.kebabCase(node.fieldValue)}`,
      component: tagTemplate,
      context: { tag: node.fieldValue },
    })
  })
}