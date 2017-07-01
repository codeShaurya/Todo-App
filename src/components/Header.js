/**
 * Created by shubham on 27/6/17.
 */
import React, { Component } from 'react';
import './style/Header.css';
import logo from './logo.svg';


class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is a Todo APP
        </p>
      </div>
    );
  }
}

export default Header;
