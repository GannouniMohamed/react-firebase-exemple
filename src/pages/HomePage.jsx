import React, { Component } from 'react'
import { compose } from 'recompose'
import { Container, Header } from 'semantic-ui-react'

import { withAuthorization, withEmailVerification, AuthUserContext } from '../components/Session'
import { ProfilForm } from '../components/ProfilForm'
import { Footer } from '../components/Footer'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: null
    }
  }

  render () {
    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <Container fluid>
            <Container text>
              <Header as='h2' color='teal' textAlign='center' style={{ marginTop: '5em', textTransform: 'uppercase' }}>
                UPLOAD YOUR CV
              </Header>
              <ProfilForm authUser={authUser} />
            </Container>
            <Footer />
          </Container>
        )}
      </AuthUserContext.Consumer>
    )
  }
}

const condition = (authUser) => !!authUser

export default compose(withEmailVerification, withAuthorization(condition))(HomePage)
