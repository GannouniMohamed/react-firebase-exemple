import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase, children, inverted }) => (
	<Header inverted={inverted} as="h4" onClick={firebase.doSignOut}>
		<Icon name={'log out'} inverted={inverted} size={'large'} /> {children}
	</Header>
);

export default withFirebase(SignOutButton);
