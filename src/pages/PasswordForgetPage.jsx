import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import { PasswordForgetForm } from '../components/PasswordForget'
import { Footer } from '../components/Footer'

const PasswordForgetPage = () => (
  <div>
    <Container text style={{ padding: '16em 0em', maxWidth: 750 }}>
      <Header as='h2' color='blue'>Password Forget</Header>
      <PasswordForgetForm />
    </Container>
    <Footer style />
  </div>
)

export default PasswordForgetPage
