import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/index.css';

export default class LoginForm extends React.Component {
  render() {
    return (
      <div id="LoginForm">
        <FontAwesomeIcon icon={faLock} size="2x" />
        <h3>Log In</h3>
        <input placeholder="Username"></input>
        <input placeholder="Password" type="password"></input>
        <button>Submit</button>
        <a href="#">Register</a>
      </div>
    );
  }
}
