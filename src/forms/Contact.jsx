import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { renderTextField } from '../util/formik-custom-fields';
import Button from '../components/Button/Button';

const Contact = ({ light }) => (
  <Formik
    initialValues={{ emailAddress: '', message: '' }}
    validationSchema={yup.object().shape({
      emailAddress: yup.string().email().required('Required'),
      message: yup.string().required('Required'),
    })}
    onSubmit={(values, { setSubmitting, setStatus }) => {
      const toUrlEncoded = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

      fetch('https://idesignpixels.prod.with-datafire.io/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: toUrlEncoded(values),
      })
        .then(({ status }) => {
          setSubmitting(false);
          if (status !== 200) {
            console.log(status);
            console.log('done');
            throw new Error(`${status}: Could not send`);
          }
          setStatus({ formSubmitted: true });
        })
        .catch(error => setStatus({ formError: error.message }));
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      status,
    }) => (
      status && status.formSubmitted
        ? (
          <h3>Thanks for your message!</h3>
        )
        : (
          <form onSubmit={handleSubmit}>
            <Field
              component={renderTextField}
              type="email"
              name="emailAddress"
              label="Email"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emailAddress}
              errorText={errors.emailAddress}
            />
            <br />
            <Field
              component={renderTextField}
              name="message"
              label="Message"
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              errorText={errors.message}
              rows={4}
              multiLine
            />
            <br />
            {status && status.formError
              ? (
                <Fragment>
                  {status.formError}
                  <br />
                </Fragment>
              )
              : null}
            <br />
            <div style={{ textAlign: 'center' }}>
              <Button
                type="submit"
                label="Send"
                cta
                loading={isSubmitting}
              />
            </div>
          </form>
        )
    )}
  </Formik>
);

export default Contact;