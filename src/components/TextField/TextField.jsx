import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      textAreaHeight: 'auto',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange, multiLine } = this.props;
    onChange(e);
    // update textarea height
    if (multiLine) {
      window.setTimeout(() => {
        this.setState({ textAreaHeight: 'auto' });
        this.setState({ textAreaHeight: `${this.textArea.scrollHeight}px` });
      }, 0);
    }
  }

  render() {
    const {
      className,
      value,
      name,
      required,
      disabled,
      type,
      defaultValue,
      errorText,
      multiLine,
      onBlur,
      onFocus,
      inputRef,
      label,
      uppercase,
      touched,
      maxLength,
      min,
      max,
      rows,
    } = this.props;
    const { textAreaHeight, focused } = this.state;

    const handleFocus = (e) => {
      this.setState({ focused: true });
      if (onFocus) {
        onFocus(e);
      }
    };

    const handleBlur = (e) => {
      if (onBlur) {
        onBlur(e);
      }
      this.setState({ focused: false });
    };

    const wrapperClasses = [
      styles.wrapper,
      value && styles.value,
      this.state.focused && styles.active,
      disabled && styles.disabled,
      errorText && styles.error,
    ].join(' ');

    const labelClasses = [
      styles.label,
    ].join(' ');

    const errorTextClasses = [
      styles.errorText,
      'shake',
    ].join(' ');

    const fieldType = () => {
      if (multiLine) {
        return (
          <textarea
            rows={rows}
            value={value}
            name={name}
            onChange={e => this.handleChange(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={(el) => { this.textArea = el; }}
            style={{ height: textAreaHeight }}
            disabled={disabled}
          />
        );
      }
      return (
        <input
          value={value}
          name={name}
          type={type && type}
          onChange={e => this.handleChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          maxLength={maxLength}
          disabled={disabled}
          min={min}
          max={max}
        />
      );
    };

    return (
      <div className={wrapperClasses} ref={(el) => { this.wrapper = el; }}>
        <div className={labelClasses}>{label}</div>
        {fieldType()}
        {errorText &&
          <div className={errorTextClasses}>{errorText}</div>
        }
      </div>
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  multiLine: PropTypes.bool,
  errorText: PropTypes.node,
  touched: PropTypes.bool,
  uppercase: PropTypes.bool,
  maxLength: PropTypes.number,
  min: PropTypes.string,
  max: PropTypes.string,
  rows: PropTypes.number,
};

TextField.defaultProps = {
  value: '',
  required: false,
  disabled: false,
  label: null,
  errorText: null,
  multiLine: false,
  touched: false,
  uppercase: false,
  maxLength: 524288,
  min: null,
  max: null,
  rows: 1,
};