import React from 'react'
import { Icon, Container, Item, Segment } from 'semantic-ui-react'
import { compose } from 'recompose'

import { AuthUserContext, withAuthorization, withEmailVerification } from '../components/Session'
import { PasswordForgetForm } from '../components/PasswordForget'
import { PasswordChangeForm } from '../components/PasswordChange'
import { LoginManagement } from '../components/Account'
import { Footer } from '../components/Footer'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <Container style={{margin: '9em 0em'}}>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Icon name='settings' size='massive' />
              </Item.Content>
              <Item.Content>
                <Item.Header as='a'>Welcome :</Item.Header>
                <Item.Extra>
                  <Icon name='user' circular />
                  {authUser.username}
                </Item.Extra>
                <Item.Meta>
                  <span>{new Date().toLocaleString()}</span>
                </Item.Meta>
                <Item.Description>
                  this page is not a game. <Icon name='smile outline' />
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>

          <div className='ui horizontal divider'> Reset email </div>
          <Segment >
            <PasswordForgetForm />
          </Segment>
          <div className='ui horizontal divider'> Reset Password </div>
          <Segment>
            <PasswordChangeForm />
          </Segment>
          <div className='ui horizontal divider'> Sign In Methods </div>
          <Segment>
            <LoginManagement authUser={authUser} />
          </Segment>
          <div className='ui horizontal divider hidden' />
        </Container>
        <Footer />
      </div>
    )}
  </AuthUserContext.Consumer>
)

const condition = (authUser) => !!authUser
export default compose(withEmailVerification, withAuthorization(condition))(AccountPage)
