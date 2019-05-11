const path = require('path');
const _ = require("lodash");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/Post.jsx');
  const categoryTemplate = path.resolve('./src/templates/Category.jsx');
  const res = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              categories
              date (
                formatString: "DD-MM-YYYY",
              )
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = res.data.allMarkdownRemark.edges;

  posts.map((post) => {
    createPage({
      component: postTemplate,
      path: `posts/${post.node.fields.slug}`,
      context: {
        slug: post.node.fields.slug,
      }
    });
  })

  let categories = [];
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.categories")) {
      categories = categories.concat(edge.node.frontmatter.categories);
    }
  });
  categories = _.uniq(categories);

  categories.forEach((category) => {
    createPage({
      path: `/category/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
