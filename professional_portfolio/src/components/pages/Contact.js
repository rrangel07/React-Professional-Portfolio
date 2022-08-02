import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../../styles/style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!name) {
      setErrorMessage('Name is required')
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage(
        'Message is required'
      );
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <Container className='background-form p-4'>
      <form className='d-flex flex-column'>
        <label for='name'>Name: </label>
        <input
          value={name}
          id='name'
          name='name'
          onChange={handleInputChange}
          type='text'
          placeholder='Your name'
          className='mb-3'
        />
        <label for='email'>Email: </label>
        <input
          value={email}
          name='email'
          id='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Your e-mail'
          className='mb-3'
        />
        <label for='message'>Message: </label>
        <textarea
          value={message}
          name='message'
          id='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Your message'
          className='mb-3'>
        </textarea>
        <div>
        <button type='button' onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}
    </Container>
  );
}