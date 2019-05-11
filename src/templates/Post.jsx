import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image';
import kebabCase from "lodash/kebabCase";
import Layout from '../components/Layout/Layout';
import AdSensePrimary from '../components/AdSensePrimary/AdSensePrimary';
import Button from '../components/Button/Button';
import CategoryLink from '../components/CategoryLink/CategoryLink';
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
        author
        categories
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
      <SEO title={frontmatter.title} keywords={frontmatter.categories} />
      <Img
        fluid={frontmatter.image.childImageSharp.fluid}
        alt={frontmatter.title}
      />
      <br />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div>Categories:</div>
      <div>
        {frontmatter.categories.map(category => (
          <CategoryLink
            key={category}
            to={`/categories/${kebabCase(category)}`}
            label={category}
          />
        ))}
      </div>
      <br />
      {
        renderAst(htmlAst)
      }
    </Layout>
  )
}

export default Post
