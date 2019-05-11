import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/Layout/Layout";
import PostPreview from "../components/PostPreview/PostPreview";
import SEO from "../components/seo";


export const query = graphql`
  query ($category: String) {
    allMarkdownRemark (
      filter: {
        frontmatter: {
          categories: {
            in: [$category]
          }
        }
      },
      sort: {
        fields: frontmatter___date
        order: DESC
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            categories
            image {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  tracedSVG
                  aspectRatio
                }
              }
            }
            date (
              formatString: "MMM Do, YYYY",
            )
          }
        }
      }
    }
  }
`
  
const Category = ({ pageContext, data }) => {
  const { category } = pageContext;
  
  return (
    <Layout pageTitle={`Category: ${category}`}>
      <SEO title={`Category | ${category}`} />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview
          key={node.id}
          image={node.frontmatter.image.childImageSharp.fluid}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          intro={node.excerpt}
          to={`/posts/${node.fields.slug}`}
        />
      ))}
    </Layout>
  )
}

export default Category;
