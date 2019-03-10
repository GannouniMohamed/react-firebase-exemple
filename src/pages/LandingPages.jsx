/* eslint-disable max-len */

import React from 'react'
import { Container, Header, Segment, Grid, Responsive, Divider, Image, Button } from 'semantic-ui-react'

import background from '../assets/background.jpg'
import { Footer } from '../components/Footer'
const getWidth = () => window.innerWidth

const Landing = () => (
  <div>
    <style>
      {`
        .fontText {
          font-family: 'Sarabun', sans-serif;
          color: #fff;
        }
        .landpage-image{
          background-image: url(${background});
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
        }
      `}
    </style>
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Container fluid textAlign='left' className='landpage-image'>
        <div
          style={{
            width: '100%',
            height: 150
          }}
        />
        <div
          style={{
            zIndex: 100,
            width: 680,
            color: '#fff',
            marginLeft: 40,
            position: 'abselute',
            backgroundImage: background
          }}
        >
          <Header
            content="Agence spécialisée dans le recrutement de cadres et dirigeants en France et à l'étranger."
            className='fontText'
            as='h1'
            inverted
            style={{
              fontSize: '3em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: '1.5em'
            }}
            dividing
          />
          <Divider fitted inverted />
          <Header
            content='Leader du recrutement dans les domaines de la finance, des nouvelles technologies et des ressources humaines.'
            className='fontText'
            as='h3'
            inverted
            style={{
              fontSize: '1.5em',
              fontWeight: 'normal',
              marginTop: '0.5em'
            }}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: 200
          }}
        />
      </Container>
    </Responsive>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Why Company Name
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              - High level technological expertise Our employees are rigorously selected for their state
              of mind, competence and efficiency. Thus we offer computer scientists and high level experts
              with a minimum of bac + 4, bac + 5 and bac + 6 with experiences ranging from 2 years and
              more, but we open our doors to autodidactes. Diversity is a wealth: Our engineers come from
              all walks of life.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Donnez un coup de pouce à votre carrière
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Our primary objective is to create sustainable added value, to benefit our customers from
              new technologies and to increase their productivity and make a direct impact on their
              profitability. We put our expertise and know-how in the field of development of specific
              solutions to serve our customers.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='http://www.almuerzodenegocios.com/wp-content/uploads/2018/07/project-scope-management-work-package-article.jpg'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Read More</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Candidats
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur "Modifier Texte" ou
              double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Déplacez-moi où
              vous le souhaitez sur votre page. Expliquez ici votre parcours et présentez votre activité à
              vos visiteurs.
            </p>
            <Button primary size='medium'>
              Read More
            </Button>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Employeurs
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur "Modifier Texte" ou
              double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Déplacez-moi où
              vous le souhaitez sur votre page. Expliquez ici votre parcours et présentez votre activité à
              vos visiteurs.
            </p>
            <Button secondary size='medium'>
              Read More
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the art of
          doing nothing by providing massive amounts of whitespace and generic content that can seem massive,
          monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          Case Studies
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's
          really true. It took years of gene splicing and combinatory DNA research, but our bananas can really
          dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Footer />
  </div>
)

export default Landing
