import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const InputField = props => {

  //Checks if all the fields are filled and if an @ sign is used in the email field
  const validateInput = values => {

    if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
      return true
    } else {
      return false
    }

  }
  if (props.type === "submit") {
    return (
      <input
        className='primaryBtn primaryBtn--big g__justify-self-center'
        type='submit'
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    )
  } else if (props.type === "textarea") {
    return (
      <label className="inputField__label">
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <label className="inputField__label">
        {props.label}
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className="inputField__field"
          name={props.name}
        />
      </label>
    );
  }

};

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    });
  }

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setEmail('');
  }

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">
          sending...
        </div>
      )}

      {status === "error" && (
        <div 
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <div className="mc__field-container">
        <InputField
          label="Email"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
        />

      </div>

      <InputField
        label="subscribe"
        type="submit"
        formValues={[email]}
      />
    </form>
  );
};

export default CustomForm;