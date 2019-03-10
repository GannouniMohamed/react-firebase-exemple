import React from 'react'
import { Grid, Header, Container, Icon, Segment } from 'semantic-ui-react'

import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'

const ContactPage = () => (
  <div className='ContactPage'>
    <style>{`
    body > div,
    body > div > div,
    body > div > div > div.ContactPage {
      height: 100%;
    }
    .bg{
      background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
    background-blend-mode: normal, lighten, soft-light;
    }
    .landpage-image{
      background-image: linear-gradient(to right, #434343 0%, black 100%);
    }
    
    `}</style>
    <Container textAlign='center' fluid>
      <Grid className='landpage-image' textAlign='center' style={{ padding: '9em 0em' }} verticalAlign='middle'>
        <Grid.Column>
          <Header
            as='h1'
            textAlign='center'
            content='CONTACT US'
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '1.5em'
            }}
          />
          <Icon
            name='angle down'
            color='grey'
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '1.5em'
            }}
          />
        </Grid.Column>
      </Grid>
    </Container >
    <Container style={{ padding: '2em 0em' }} >

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Segment style={{ maxWidth: 750 }}>
                <ContactForm />
              </Segment>
            </Grid.Column>
            <Grid.Column style={{ padding: '8em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Do not hesitate to contact us
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                15, rue du Château,
              </p>
              <p style={{ fontSize: '1.33em' }}>
                75001 Paris,
              </p>
              <p style={{ fontSize: '1.33em' }}>
                France
              </p>
              <p style={{ fontSize: '1.33em' }}>
                <Icon name='mail' /> info@Company Nameservices.com
              </p>
              <p style={{ fontSize: '1.33em' }}>
                <Icon name='phone' /> 01 23 45 67 89
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
    <Footer />
  </div>
)

export default ContactPage
