import React from 'react';
import './save.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/edit-actions.js';

class Save extends React.Component {
  
  saveOnClick = () => {
    // console.log(this.props.rowInfo.row._original)
    let updateParts = {
      parts: this.props.parts.parts, //updating all parts, only want to update edited part
      edit: false,
      save: this.props.save
    }
    this.props.saveParts(updateParts);
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
  edit: state.edit,
  parts: state.parts,
  save: state.save
});

const mapDispatchToProps = (dispatch, getState) => ({
  saveParts: (payload) => dispatch(actions.saveParts(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Save);