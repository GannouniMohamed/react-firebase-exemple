import React, { Component } from 'react';
import { Container, Form, Input, Button, Message } from 'semantic-ui-react';
import { withFirebase } from '../Firebase';


const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
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
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Container fluid>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </Form.Field>
          <Button disabled={isInvalid} type="submit">
            Reset My Password
          </Button>

          {error && <Message>{error.message}</Message>}
        </Form>
      </Container>
    );
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;
