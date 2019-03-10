import React, { Component } from 'react'
import { Container, Message, Icon, Header, Segment } from 'semantic-ui-react'

import { withFirebase } from '../Firebase'
import UsersDoc from './UsersDoc'
class UserItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      user: null,
      ...props.location.state
    }
  }

  componentDidMount () {
    if (this.state.user) {
      return
    }

    this.setState({ loading: true })

    this.props.firebase.user(this.props.match.params.id).on('value', (snapshot) => {
      this.setState({
        user: snapshot.val(),
        loading: false
      })
    })
  }

  componentWillUnmount () {
    this.props.firebase.user(this.props.match.params.id).off()
  }

  render () {
    const { user, loading } = this.state
    return (
      <Container text>
        <Segment basic>
          <Icon name='arrow left' size='large' onClick={() => this.props.history.goBack()} />
        </Segment>

        {loading && <Message>Loading ...</Message>}
        <Container text>
          {user && (
            <div>
              <Header as='h4' attached='top' block>
                Name:
              </Header>
              <Segment attached>{user.username}</Segment>
              <Header as='h4' attached block>
                E-Mail:
              </Header>
              <Segment attached>{user.email}</Segment>
            </div>
          )}
        </Container>
        <UsersDoc id={this.props.match.params.id} />
      </Container>
    )
  }
}

export default withFirebase(UserItem)
