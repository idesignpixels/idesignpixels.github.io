import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuIcon.module.scss';

const MenuIcon = ({ onClick, open, className }) => (
  <div
    className={[className, styles.wrapper, open && styles.open].join(' ')}
    onClick={onClick}
    role="button"
    tabIndex="0"
  >
    <span />
    <span />
    <span />
    <span />
  </div>
);


MenuIcon.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuIcon.defaultProps = {
  open: false,
  onClick: null,
};

export default MenuIcon;