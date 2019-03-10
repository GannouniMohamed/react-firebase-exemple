import React, { Component } from 'react';
import { Button, Form, Input, Container, Message } from 'semantic-ui-react'
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <Container fluid>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="New Password"
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm New Password"
            />
          </Form.Field>
          <Button disabled={isInvalid} type="submit">
            Reset My Password
          </Button>

          {error && <Container><Message>{error.message}</Message></Container>}
        </Form>
      </Container>
    );
  }
}

export default withFirebase(PasswordChangeForm);
