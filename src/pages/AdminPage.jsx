import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { compose } from 'recompose'
import { Container, Header } from 'semantic-ui-react'

import { withAuthorization, withEmailVerification } from '../components/Session'
import { UserList, UserItem } from '../components/Users'
import * as ROLES from '../constants/roles'
import * as ROUTES from '../constants/routes'
import { Footer } from '../components/Footer'

const AdminPage = () => (
  <div>
    <Container text>
      <Header style={{ marginTop: '5em' }} as='h2' color='blue'>
        List of talents
      </Header>

      <Switch>
        <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
        <Route exact path={ROUTES.ADMIN} component={UserList} />
      </Switch>
    </Container>
    <div style={{padding: '10em 0em'}} className='ui horizontal divider hidden' />
    <Footer />
  </div>
)

const condition = (authUser) => authUser && authUser.roles.includes(ROLES.ADMIN)

export default compose(withEmailVerification, withAuthorization(condition))(AdminPage)
