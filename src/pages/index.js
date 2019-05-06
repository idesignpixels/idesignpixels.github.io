import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostPreview from "../components/PostPreview/PostPreview";
import Button from "../components/Button/Button";
import SEO from "../components/seo";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: {
          fields: frontmatter___date
          order: DESC
        },
        limit: 4,
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
    <Layout pageTitle="Recent posts">
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
      <div style={{ textAlign: 'center' }}>
        <Button label="All posts" to="/posts" />
      </div>
    </Layout>
  )
}

export default IndexPage
