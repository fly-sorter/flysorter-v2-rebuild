import React from 'react';
import Nav from '../nav/nav.js';

import logo from '../../assets/logo.png';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={logo} className="flysorter-logo" alt="logo" />
        </div>
        <Nav />
      </React.Fragment>
    );
  }
}

export default Header;