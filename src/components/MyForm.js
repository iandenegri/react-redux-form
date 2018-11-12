import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

const submit = ({ firstName='', lastName='', email='' }) => {
// Submit function will be handling validation.

  let error = {};
  let isError = false;

  // Check if any field returns blank.
  if (firstName.trim() === '') {
    error.firstName = 'Required';
    isError = true;
  }
  if (lastName.trim() === '') {
    error.lastName = 'Required';
    isError = true;
  }
  if (email.trim() === '') {
    error.email = 'Required';
    isError = true;
  }

  // Check if email is a reasonable length.
  if (email.length > 64) {
    error.email = 'Enter a valid email.';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  }
  else {
    // Submit the form. There is not any errors.
    console.log('Submission was a success.')
  }
}

const renderField = ({ type, label, input, meta: { touched, error } }) => (
  <div className="input-row">
    <label>{ label }</label>
    <br />
    <input {...input} type={ type } />
    { touched && error &&
     <span className="error">{ error }</span>}
  </div>
);

let ContactFormFunct = ({handleSubmit}) => (
  <form onSubmit={handleSubmit(submit)}>
      <Field
        name="firstName"
        label='First Name'
        component={renderField}
        type="text"
      />
      <Field
        name="lastName"
        label='Last Name'
        component={renderField}
        type="text"
      />
      <Field
        name="email"
        label='Email'
        component={renderField}
        type="email"
      />
    <button type="submit">Submit</button>
  </form>
);

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactFormFunct)

export default ContactForm
