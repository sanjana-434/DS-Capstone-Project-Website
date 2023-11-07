// Contact.js

import React, { Component } from 'react';
import contactImg from '../assets/img/contactImg.png'
import '../styles/Contact.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', this.state);
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
      <div className="contact-container">
        <div className="contact-image">
          <img
            src= {contactImg}
            alt="Contact Us"
            className="contact-image-svg"
          />
        </div>
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form  action="https://formspree.io/f/mbjvpnbk" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                required
              ></textarea>
            </div>
            <div className="button-container">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Contact;
