import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Feed, Icon, Button } from 'semantic-ui-react'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

class UserList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount () {
    this.setState({ loading: true })

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val()

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }))

      this.setState({
        users: usersList,
        loading: false
      })
    })
  }

  componentWillUnmount () {
    this.props.firebase.users().off()
  }

  render () {
    const { users, loading } = this.state
    return (
      <Container>
        <Card fluid>
          <Card.Content>
            <Card.Header>Users</Card.Header>
            {loading && <Card.Header>Loading ...</Card.Header>}
          </Card.Content>
          <Card.Content>
            <Feed>
              {users.map(user => (
                <Feed.Event  key={user.uid}>
                  <Feed>
                    <Icon size='huge' name='user' />
                  </Feed>
                  <Feed.Content>
                    <Feed.Summary>
                      <strong>Username:</strong> {user.username}
                    </Feed.Summary>
                    <Feed.Summary>
                      <strong>E-Mail:</strong> {user.email}
                    </Feed.Summary>
                  </Feed.Content>
                  <Link
                    to={{
                      pathname: `${ROUTES.ADMIN}/${user.uid}`,
                      state: { user }
                    }}
                  >
                    <Button color='blue' >
                      Details
                    </Button>
                  </Link>
                </Feed.Event>
              ))}
            </Feed>
          </Card.Content>
        </Card>
      </Container>
    )
  }
}

export default withFirebase(UserList)
