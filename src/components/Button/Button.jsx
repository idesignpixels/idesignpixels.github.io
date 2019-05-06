import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
  type,
  to,
  link,
  icon,
  label,
  loading,
  disabled,
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (link && (typeof window !== 'undefined')) {
      window.open(link, '_blank');
    } else if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button
      type={type}
      className={[
        styles.button,
        icon && styles.withIcon,
        disabled && styles.disabled,
        loading && styles.loading,
        className,
      ].join(' ')}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {!loading && <span className={styles.label}>{label}</span>}
    </button>
  );
}


Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  to: null,
  link: null,
  icon: null,
  disabled: false,
  loading: false,
  onClick: null,
};

export default Button;