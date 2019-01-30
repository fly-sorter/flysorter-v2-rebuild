import React from 'react';

import logo from '../../assets/logo.png';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={logo} className="flysorter-logo" alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;