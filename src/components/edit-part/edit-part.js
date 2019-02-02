import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/edit-actions.js';

import './edit-part.css';

class EditPart extends React.Component {
  constructor(props) {
    super(props);
  }

  editOnClick = () => {
    this.props.editParts(true)
  }

  render() {
    return (
      <button onClick={this.editOnClick}>Edit</button>
    );
  }
}

const mapStateToProps = state => ({
  edit: state.edit
});

const mapDispatchToProps = (dispatch, getState) => ({
  editParts: (payload) => dispatch(actions.editParts(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPart);