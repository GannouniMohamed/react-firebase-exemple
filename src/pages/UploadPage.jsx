import React, { Component } from 'react'
import { Container, Segment, Grid, Modal, Button, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// import Messages from '../components/Messages'
import { UploadForm } from '../components/UploadForm'
import * as ROUTES from '../constants/routes';

import { Footer } from '../components/Footer'

class UploadPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render () {
    const {open} = this.state;
    return (
      <div>
        <style>{`
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
                content='Uplaod'
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
        <Container text>
          <Segment style={{ maxWidth: 750, margin: '5em 0em' }}>
            <UploadForm show={this.show.bind(this)}/>
          </Segment>
        </Container>
        <Modal open={open} onClose={this.close}>
          <Header icon='user' content='Warning' />
          <Modal.Content>
            <p>
            you must be logged in to upload your document
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' onClick={this.close}>
              <Icon name='remove' /> No
            </Button>
            <Link to={ROUTES.SIGN_IN}>
              <Button color='green' onClick={this.close}>
                <Icon name='sign-in' /> Sign in now
              </Button>
            </Link>
          </Modal.Actions>
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default UploadPage
