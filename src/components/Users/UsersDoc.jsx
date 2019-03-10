import React, { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import { PDFReader } from '../PDFReader'
import { withFirebase } from '../Firebase'

class UsersDoc extends Component {
  constructor (props) {
    super(props)

    this.state = {
      document: {
        downloadURL: ''
      }
    }
  }

  componentDidMount () {
    if (this.state.user) {
      return
    }

    this.setState({ loading: true })
    this.props.firebase.document(this.props.id).on('value', (snapshot) => {
      this.setState({
        document: snapshot.val()
      })
    })
  }

  componentWillUnmount () {
    this.props.firebase.document(this.props.id).off()
  }

  render () {
    const { document: { downloadURL } } = this.state
    return (
      <Container text>
        {downloadURL && (
          <div>
            <Header as='h4' attached block>
              Download Link:
            </Header>
            <Segment attached>{downloadURL}</Segment>
          </div>
        )}
        {downloadURL ? (
          <PDFReader file={downloadURL} />
        ) : (
          <div style={{ padding: '9em 0em' }} className='ui horizontal divider hidden' />
        )}
      </Container>
    )
  }
}

export default withFirebase(UsersDoc)
