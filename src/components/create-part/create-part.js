import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/createPart-actions.js';
import { Form, FormSpy } from 'react-final-form';
import { Field } from 'react-final-form-html5-validation'

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
                  class='inputField'
                  >
                  {/* {({input, meta, placeholder}) => (
                    <div>
                      <label>Id</label>
                        <input {...input} placeholder={placeholder}/>
                    </div>
                  )} */}
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
              <button className='formButton' type='submit' disabled={submitting}>Submit</button>
              {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
              <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre className='formSpy'>{JSON.stringify(values, undefined, 2)}</pre>}
          </FormSpy>
          <br />
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