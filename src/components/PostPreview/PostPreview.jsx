import React from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from 'gatsby-image';
import styles from './PostPreview.module.scss';


const PostPreview = ({
  image,
  title,
  date,
  intro,
  to,
}) => (
  <Link
    className={styles.wrapper}
    to={to}
  >
    <Img
      className={styles.banner}
      fluid={image}
      alt={title}
    />
    <h2>{title}</h2>
    <span>{date}</span>
    <p>{intro}</p>
  </Link>
);

PostPreview.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default PostPreview;