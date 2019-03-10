import React, { Component } from 'react';
import {  Container } from 'semantic-ui-react';

import DefaultLoginToggle from './DefaultLoginToggle'
import SocialLoginToggle from './SocialLoginToggle'
import { withFirebase } from '../Firebase';


const SIGN_IN_METHODS = [
	{
		id: 'password',
		provider: null
	},
	{
		id: 'google.com',
		provider: 'googleProvider',
		icon: 'google'
	}
];

class LoginManagementBase extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeSignInMethods: [],
			error: null
		};
	}

	componentDidMount() {
		this.fetchSignInMethods();
	}

	fetchSignInMethods = () => {
		this.props.firebase.auth
			.fetchSignInMethodsForEmail(this.props.authUser.email)
			.then((activeSignInMethods) => this.setState({ activeSignInMethods, error: null }))
			.catch((error) => this.setState({ error }));
	};

	onSocialLoginLink = (provider) => {
		this.props.firebase.auth.currentUser
			.linkWithPopup(this.props.firebase[provider])
			.then(this.fetchSignInMethods)
			.catch((error) => this.setState({ error }));
	};

	onDefaultLoginLink = (password) => {
		const credential = this.props.firebase.emailAuthProvider.credential(this.props.authUser.email, password);

		this.props.firebase.auth.currentUser
			.linkAndRetrieveDataWithCredential(credential)
			.then(this.fetchSignInMethods)
			.catch((error) => this.setState({ error }));
	};

	onUnlink = (providerId) => {
		this.props.firebase.auth.currentUser
			.unlink(providerId)
			.then(this.fetchSignInMethods)
			.catch((error) => this.setState({ error }));
	};

	render() {
		const { activeSignInMethods, error } = this.state;

		return (
			<div>
				<Container>
					{SIGN_IN_METHODS.map((signInMethod) => {
						const onlyOneLeft = activeSignInMethods.length === 1;
						const isEnabled = activeSignInMethods.includes(signInMethod.id);

						return (
							<Container key={signInMethod.id}>
								{signInMethod.id === 'password' ? (
									<DefaultLoginToggle
										onlyOneLeft={onlyOneLeft}
										isEnabled={isEnabled}
										signInMethod={signInMethod}
										onLink={this.onDefaultLoginLink}
										onUnlink={this.onUnlink}
									/>
								) : (
									<SocialLoginToggle
										onlyOneLeft={onlyOneLeft}
										isEnabled={isEnabled}
										signInMethod={signInMethod}
										onLink={this.onSocialLoginLink}
										onUnlink={this.onUnlink}
									/>
								)}
							</Container>
						);
					})}
				</Container>
				{error && error.message}
			</div>
		);
	}
}

const LoginManagement = withFirebase(LoginManagementBase);

export default LoginManagement;
