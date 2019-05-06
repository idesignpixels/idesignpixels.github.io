import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image';
import Layout from '../components/Layout/Layout';
import AdSensePrimary from '../components/AdSensePrimary/AdSensePrimary';
import Button from '../components/Button/Button';
import SEO from '../components/seo';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date (
          formatString: "MMM Do, YYYY",
        )
        image {
          childImageSharp {
            fluid {
              src
              srcSet
              tracedSVG
              aspectRatio
              sizes
            }
          }
        }
      }
      htmlAst
    }
  }
`

const Post = (props) => {
  const { frontmatter, htmlAst } = props.data.markdownRemark;
  
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'adsense': AdSensePrimary,
      'button': Button,
    },
  }).Compiler;
  
  return (
    <Layout>
      <SEO title="Post" keywords={[`gatsby`, `application`, `react`]} />
      <Img
        fluid={frontmatter.image.childImageSharp.fluid}
        alt={frontmatter.title}
      />
      <br />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      {
        renderAst(htmlAst)
      }
    </Layout>
  )
}

export default Post
