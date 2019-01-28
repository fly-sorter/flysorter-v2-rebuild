import React from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Parts from '../parts/parts.js';
import EditPart from '../edit-part/edit-part.js';
import CreatePart from '../create-part/create-part.js';
import CreateSub from '../create-sub/create-sub.js';

import './nav.css';

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className='primary-header'>
            <nav>
              <NavLink to='/parts' activeClassName="active">Parts</NavLink>
              <NavLink to='/edit-part' activeClassName="active">Edit Part</NavLink>
              <NavLink to='/create-part' activeClassName="active">Create Part</NavLink>
              <NavLink to='/create-sub-assm' activeClassName="active">Create Sub-Assm</NavLink>
            </nav>

            <Route path='/parts' component={Parts} />
            <Route path='/edit-part' component={EditPart} />
            <Route path='/create-part' component={CreatePart} />
            <Route path='/create-sub-assm' component={CreateSub} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default Nav;