import React from "react";
import "./MailchimpFormContainer.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "../CustomForm";

const MailchimpFormContainer = props => {
  const postUrl = `https://soireesocietyclt.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  return (
    <div className="mc__form-container">
        <MailchimpSubscribe 
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status} 
              message={message}
              onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </div>
  );
};

export default MailchimpFormContainer;