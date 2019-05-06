const path = require('path');

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
  const res = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
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

  res.data.allMarkdownRemark.edges.map((edge) => {
    createPage({
      component: postTemplate,
      path: `posts/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      }
    });
  })
}
