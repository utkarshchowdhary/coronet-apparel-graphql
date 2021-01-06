import React, { useState } from 'react';

import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import './ContactPage.scss';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="contact-page">
      <div className="contact-page__info">
        <h1>Contact Me</h1>
        <p>
          This seemingly impersonal contact form aside will deliver your message
          personally to my inbox. I usually reply within 48 hours.
        </p>
        <p>
          Not a fan of contact forms? Feel free to send me an email to
          utkarshkororo@gmail.com or message me using the form aside.
        </p>
      </div>
      <div className="contact-page__form">
        <h1>Hi, There!</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            element="textarea"
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
            label="Message"
            required
          />
          <div className="button">
            <CustomButton type="submit">Send</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
