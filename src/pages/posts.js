import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostPreview from "../components/PostPreview/PostPreview";
import SEO from "../components/seo";


const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: {
          fields: frontmatter___date
          order: DESC
        }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
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
  `);
  
  return (
    <Layout pageTitle="All posts">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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

export default PostsPage
