import React, { useState, useEffect } from 'react';

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
        className='submit-btn'
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
      <div className="form_group">
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className={`inputField__field ${props.class}`}
          name={props.name}
          id={props.id}
        />
        <label className="inputField__label">
          {props.label}
        </label>
      </div>
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

      <div className="mc__field-container">
        <InputField
          label="Email"
          class="email-input"
          id="email-field"
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="Email"
          isRequired
        />
        <InputField
          label="Sign Up"
          type="submit"
          formValues={[email]}
        />
      </div>

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
      
    </form>
  );
};

export default CustomForm;