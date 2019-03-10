import React from 'react'

import { Grid, Header, Container, Card, Icon, Segment, Divider } from 'semantic-ui-react'
import { Footer } from '../components/Footer'
import Recrutemnt from '../components/SVG/Recrutemnt'
import Formation from '../components/SVG/Formation'
import Advice from '../components/SVG/Advice'
import Coaching from '../components/SVG/Coaching'
const ServicesPage = () => (
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
            content='OUR SERVICES'
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
    </Container>
    <Container style={{ padding: '2em 0em' }} fluid centered>
      <Card.Group>
        <Card centered>
          <Card.Content>
            <Recrutemnt />
            <Card.Header textAlign='center'>Recrutement</Card.Header>
            <Card.Meta textAlign='center'>text text text</Card.Meta>
            <Card.Description>
							Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card centered>
          <Card.Content>
            <Formation />
            <Card.Header textAlign='center'>Formation</Card.Header>
            <Card.Meta textAlign='center'>text text text</Card.Meta>
            <Card.Description>
							Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card centered>
          <Card.Content>
            <Advice />
            <Card.Header textAlign='center'>Conseils RH</Card.Header>
            <Card.Meta textAlign='center'>text text text</Card.Meta>
            <Card.Description>
							Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card centered>
          <Card.Content>
            <Coaching />
            <Card.Header textAlign='center'>Coaching</Card.Header>
            <Card.Meta textAlign='center'>text text text</Card.Meta>
            <Card.Description>
							Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Nos Prestations
        </Header>
        <p style={{ fontSize: '1.33em' }}>
					Instead of focusing on content creation and hard work, we have learned how to master the art of
					doing nothing by providing massive amounts of whitespace and generic content that can seem massive,
					monolithic and worth your attention.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        -
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Placements de Cadres et Hauts Dirigeants
        </Header>
        <p style={{ fontSize: '1.33em' }}>
					Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's
					really true. It took years of gene splicing and combinatory DNA research, but our bananas can really
					dance.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        -
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Secteurs Évaluations des Compétences
        </Header>
        <p style={{ fontSize: '1.33em' }}>
					Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's
					really true. It took years of gene splicing and combinatory DNA research, but our bananas can really
					dance.
        </p>
      </Container>
    </Segment>
    <Footer />
  </div>
)

export default ServicesPage
