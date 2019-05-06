import React from 'react';
import _ from 'lodash';
import TextField from '../components/TextField/TextField';


export const renderTextField = ({ field, form, label, ...custom }) => (
  <TextField
    name={field.name}
    label={label}
    value={field.value}
    touched={_.get(form.touched, field.name)}
    errorText={_.get(form.errors, field.name)}
    onChange={field.onChange}
    onBlur={field.onBlur}
    {...custom}
  />
);
