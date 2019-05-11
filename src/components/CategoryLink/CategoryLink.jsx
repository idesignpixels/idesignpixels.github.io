import React from 'react';
import { Link } from 'gatsby';
import styles from './CategoryLink.module.scss';

const CategoryLink = ({ to, label }) => (
  <Link
    className={styles.category}
    to={to}
  >{label}</Link>
)

export default CategoryLink;