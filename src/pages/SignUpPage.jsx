import React from 'react'
import { Container, Header, Segment, Grid, Divider } from 'semantic-ui-react'

import { SignUpForm } from '../components/SignUp'
import { SignInGoogle } from '../components/SignIn'
import { Footer } from '../components/Footer'
const SignUpPage = () => (
  <div className='login-form'>
    <style>{`
    body > div,
    body > div > div,
    body > div > div > div.login-form {
      height: 100%;
    }
    .landpage-image{
      background-image: url(https://fg.ull.es/noticias/wp-content/uploads/sites/2/2018/11/startup-593327_960_720.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
  `}</style>
    <Container fluid>
      <Grid textAlign='center' className='landpage-image' style={{ padding: '9em 0em' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 750 }}>
          <div
            style={{
              width: '100%',
              height: 150
            }}
          />
          <Segment>
            <Header as='h2' color='teal' textAlign='center'>
                SIGN UP
            </Header>
            <SignUpForm />
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
          OR
            </Divider>
            <SignInGoogle signup />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
    <Footer />
  </div>
)

export default SignUpPage
