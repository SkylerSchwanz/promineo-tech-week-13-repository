import React from 'react';
import '../styles/index.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <header id="Navbar">
        <ul>
          <li key="home">
            <a href="#">
              <h4>Home</h4>
            </a>
          </li>
          <li key="about">
            <a href="#">
              <h4>About</h4>
            </a>
          </li>
          <h1 id="Logo">SKY</h1>
          <li key="contact">
            <a href="#">
              <h4>Contact</h4>
            </a>
          </li>
          <li key="login">
            <a href="#">
              <h4>Login</h4>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
