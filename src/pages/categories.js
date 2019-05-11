import React from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash/kebabCase";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import CategoryLink from '../components/CategoryLink/CategoryLink';
import Layout from "../components/Layout/Layout";


const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout pageTitle="Categories">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      {group.map(category => (
        <CategoryLink
          key={category.fieldValue}
          to={`/category/${kebabCase(category.fieldValue)}/`}
          label={`${category.fieldValue} (${category.totalCount})`}
        />
      ))}
    </div>
  </Layout>
)

CategoriesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
