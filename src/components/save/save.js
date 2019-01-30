import React from 'react';
import './save.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/edit-actions.js';

class Save extends React.Component {

  saveOnClick = () => {
    this.props.saveParts(false)
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.saveOnClick}>Save</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  edit: state.editable,
});

const mapDispatchToProps = (dispatch, getState) => ({
  saveParts: (payload) => dispatch(actions.saveParts(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);