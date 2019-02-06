import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/createPart-actions.js';
import { Form, Field } from 'react-final-form';

import './create-part.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const showResults = async values => {
  await sleep(500) // simulate server latency
  window.alert(JSON.stringify(values, undefined, 2))
}

class CreatePart extends React.Component {
  constructor(props) {
    super(props);
  }

  createPartOnClick = () => {
    this.props.createPart(true)
    alert('form was submitted')
  }

  render() {
    return (
      <React.Fragment>
        {/* <button onClick={this.createPartOnClick}>CreatePart</button> */}
        <Form
          onSubmit={showResults}
          subscription={{
            submitting: true
          }}
        >
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>
                <Field
                  name='id'
                  type='text'
                  placeholder='id'
                  required
                  valueMissing='No value!'
                  component='input'
                  class='inputField'>
                  </Field>
                  <Field
                  name='description'
                  type='text'
                  placeholder='description'
                  required
                  valueMissing='No value!'
                  component='input'
                  class='inputField'>
                  </Field>
                  <Field
                  name='assembly'
                  type='text'
                  placeholder='assembly'
                  required
                  valueMissing='No value!'
                  component='input'
                  class='inputField'>
                  </Field>
              <button type='submit' disabled={submitting}>Submit</button>
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
          )}
        </Form>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  createPart: state.createPart
});

const mapDispatchToProps = (dispatch, getState) => ({
  createPart: (payload) => dispatch(actions.createPart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePart);