import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/edit-actions.js';

import './edit-part.css';

class EditPart extends React.Component {
  constructor(props) {
    super(props);
    // this.renderEditable = this.renderEditable.bind(this);
  }

  // renderEditable = (cellInfo) => {
  //   return (
  //     <div
  //       style={{ backgroundColor: '#fafafa' }}
  //       contentEditable
  //       suppressContentEditableWarning
  //       onBlur={e => {
  //         const data = this.props.parts.parts;
  //         data[cellInfo.index][cellInfo.column.part_desc] = e.target.innerHTML;
  //         this.setState({ data });
  //       }}
  //     />
  //   );
  // }

  editOnClick = () => {
    
    this.props.editParts(true)
    // this.setState(function () {
    //   return{
    //     editable: console.log('itworks')
    //   }
    // })
  }

  render() {
    return (
      <button onClick={this.editOnClick}>Edit</button>
    );
  }
}

const mapStateToProps = state => ({
  edit: state.editable
});

const mapDispatchToProps = (dispatch, getState) => ({
  editParts: (payload) => dispatch(actions.editParts(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPart);