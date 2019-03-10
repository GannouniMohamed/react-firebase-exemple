import React from 'react'

import { Grid, Header, Divider, Container, Segment } from 'semantic-ui-react'

import { SignUpLink } from '../components/SignUp'
import { SignInForm, SignInGoogle } from '../components/SignIn'
import { PasswordForgetLink } from '../components/PasswordForget'
import { Footer } from '../components/Footer'

const SignInPage = () => (
  <div className='login-form'>
    <style>{`
    body > div,
    body > div > div,
    body > div > div > div.login-form {
      height: 100%;
    }
    .bg{
      background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
     background-blend-mode: normal, lighten, soft-light;
    }
    .divider{
      height: 95px;
      background-image: linear-gradient(to right, #434343 0%, black 100%);
    }
    .landpage-image{
      background-image: url(https://images.unsplash.com/photo-1526289375762-27075d038ebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    
    `}</style>

    <Container fluid>

      <Grid className='landpage-image' textAlign='center' style={{ padding: '9em 0em' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <div
            style={{
              width: '100%',
              height: 150
            }}
          />
          <Segment>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>
            <SignInForm>
              <Divider hidden />
              <PasswordForgetLink />
            </SignInForm>
            <SignInGoogle />
            <SignUpLink />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default SignInPage
