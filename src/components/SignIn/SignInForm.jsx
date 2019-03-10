import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Button, Form, Message, Segment } from 'semantic-ui-react'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
        <Form  onSubmit={this.onSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              name="email"
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.onChange}
            />
            <Form.Input
              fluid
              icon='lock'
              name="password"
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.onChange}
            />

            <Button disabled={isInvalid} color='blue' fluid size='large'>
              Login
            </Button>
            {this.props.children}
          </Segment>
          {error && <Message>{error.message}</Message>}
        </Form>

    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInForm
