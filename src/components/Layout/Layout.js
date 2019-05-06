import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import '../../util/fontAwesome';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ pageTitle, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Header className={styles.header} title={data.site.siteMetadata.title} />
        <div
          className={styles.content}
        >
          <main>
            {pageTitle && <h1 className={styles.pageTitle}>{pageTitle}</h1>}
            {children}
          </main>
        </div>
        <Footer className={styles.footer} />
      </div>
    )}
  />
)

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageTitle: null,
};

export default Layout
