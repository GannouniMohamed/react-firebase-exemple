import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

import * as ROUTES from '../../constants/routes';

const SignUpLink = () => (
  <Message>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </Message>
);

export default SignUpLink;
