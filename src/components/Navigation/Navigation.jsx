import React from 'react';

import { AuthUserContext } from '../Session';

import NavigationNonAuth from './NavigationNonAuth';
import NavigationAuth from './NavigationAuth';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

export default Navigation;
