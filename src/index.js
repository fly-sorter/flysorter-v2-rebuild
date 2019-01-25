import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';

class Main extends React.Component {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
