import React, { Component } from 'react';
import Header from './components/header/header.js';
import Nav from '../src/components/nav/nav.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav />
      </React.Fragment>
    );
  }
}

export default App;