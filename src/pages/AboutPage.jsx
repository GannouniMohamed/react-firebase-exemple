import React from 'react'
import { Grid, Header, Container, Image, Icon, Segment, Divider } from 'semantic-ui-react'

import { Footer } from '../components/Footer'

const AboutPage = () => (
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
            content='WHO WE ARE'
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
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Votre Carrière. Notre Priorité. Nous mettons à votre disposition nos spécialistes les plus expérimentés.
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Paragraphe. Cliquez ici pour ajouter votre propre texte. Cliquez sur "Modifier Texte" ou double-cliquez ici pour ajouter votre contenu et personnaliser les polices. Déplacez-moi où vous le souhaitez sur votre page. Expliquez ici votre parcours et présentez votre activité à vos visiteurs.

Présentez ici votre entreprise, vos services et vos équipes. Utilisez cet espace pour décrire votre activité, vos motivations, vos objectifs et soulignez vos avantages par rapport à vos concurrents. Démarquez-vous et captivez l'attention de vos visiteurs.
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        -
        </Divider>
      </Container>
      <Container text>
        <Grid columns={2} padded>
          <Grid.Column>
            <Image src='https://static.wixstatic.com/media/56292f_06e027cf0da8493facd3f595830d721a.jpg/v1/fill/w_318,h_320,al_c,q_80,usm_0.66_1.00_0.01/56292f_06e027cf0da8493facd3f595830d721a.webp' size='medium' circular />
            <Header as='h3' style={{ fontSize: '2em' }}>
              Anne Fournier
            </Header>
            <p style={{ fontSize: '1.33em' }}>Présidente</p>
            <Icon name='twitter' size={26} />
            <Icon name='linkedin' />
            <p style={{ fontSize: '1.33em' }}>Paragraphe. Cliquez ici pour ajouter votre propre texte. Relatez ici votre parcours et présentez votre activité à vos visiteurs.</p>
          </Grid.Column>
          <Grid.Column>
            <Image src='https://static.wixstatic.com/media/56292f_9f93c26ac5904933afe57ac0a2bb8236.jpg/v1/fill/w_318,h_320,al_c,q_80,usm_0.66_1.00_0.01/56292f_9f93c26ac5904933afe57ac0a2bb8236.webp' size='medium' circular />
            <Header as='h3' style={{ fontSize: '2em' }}>
              Paul Petit
            </Header>
            <p style={{ fontSize: '1.33em' }}>Directeur</p>
            <Icon name='twitter' size={26} />
            <Icon name='linkedin' />
            <p style={{ fontSize: '1.33em' }}>Paragraphe. Cliquez ici pour ajouter votre propre texte. Relatez ici votre parcours et présentez votre activité à vos visiteurs.</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    <Footer />
  </div>
)

export default AboutPage
