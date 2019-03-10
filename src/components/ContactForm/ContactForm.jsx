import React, { Component } from 'react';
import { Container, Form, Message } from 'semantic-ui-react';


class ContactForm extends Component {
	state = {
		name: '',
		email: '',
    subject: '',
    message: '',
    showMsg: false,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};


	onCreateTask = async () => {
    setTimeout(() => this.setState({showMsg: false}), 2000)
	};

	render() {
		const { name, email, message, subject, showMsg } = this.state;
      return (
        <Container>
          <Form onSubmit={(event) => this.onCreateTask()}>
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-name"
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-subject"
              label="Subject"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={this.handleChange}
            />
            <Form.TextArea
              label="Message"
              placeholder="Tell us more about your idea..."
              name="message"
              value={message}
              onChange={this.handleChange}
            />
            <Form.Button basic color="blue" fluid disabled={( !name || !email || !message || !subject)}>
              Submit
            </Form.Button>
            {showMsg && <Message positive>
              <Message.Header>Done !</Message.Header>
              <p>
                  Done !
              </p>
            </Message>
            }
          </Form>
        </Container>
      );
	}
}

export default ContactForm;
