import React, { Component } from 'react';
import { Container, Button, Form, Input, Divider } from 'semantic-ui-react';

class DefaultLoginToggle extends Component {
	constructor(props) {
		super(props);

		this.state = { passwordOne: '', passwordTwo: '' };
	}

	onSubmit = (event) => {
		event.preventDefault();

		this.props.onLink(this.state.passwordOne);
		this.setState({ passwordOne: '', passwordTwo: '' });
	};

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { onlyOneLeft, isEnabled, signInMethod, onUnlink } = this.props;

		const { passwordOne, passwordTwo } = this.state;

		const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

		return isEnabled ? (
			<Button type="button" onClick={() => onUnlink(signInMethod.id)} disabled={onlyOneLeft}>
				Deactivate {signInMethod.id}
			</Button>
		) : (
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
						Link {signInMethod.id}
					</Button>
				</Form>
				<Divider />
			</Container>
		);
	}
}

export default DefaultLoginToggle;
