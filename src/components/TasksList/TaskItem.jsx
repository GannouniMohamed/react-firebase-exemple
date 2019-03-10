import React, { Component } from 'react'
import { Card, Button, Rating, Container } from 'semantic-ui-react'

export default class TaskItem extends Component {

  constructor (props) {
    console.log('constructorprops', props)
    super(props);
    this.state = {
      rating: 0
    }
  }

  handleSubmit = () => {
    const { uid, userUid, onRate } = this.props;
    const { rating } = this.state;
    onRate(uid, rating, userUid)
  }

  render () {
    const { index, name, title, description, onRemoveTasks, uid, isAdmin, users = {}, userUid } = this.props
    return (
      <Card key={index} fluid>
        <Card.Content>
          <Card.Header>Name: {name}</Card.Header>
          <Card.Meta>Title: {title}</Card.Meta>
          <Card.Description>Description: {description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui buttons six'>
            {[
              { stars: '5', color: '#FF6384' },
              { stars: '4', color: '#36A2EB' },
              { stars: '3', color: '#FFCE56' },
              { stars: '2', color: '#5182d1' },
              { stars: '1', color: '#99c4a8' },
            ].map((star) => (
              <div className='ui basic button'>
                <Rating disabled icon='star' defaultRating={star.stars} maxRating={5} size={'tiny'} />
                <strong>:{this.props[`${star.stars}stars`] ? Object.keys(this.props[`${star.stars}stars`]).length : 0 }</strong>
              </div>
            ))}
            {isAdmin && (
              <Button basic color='red' onClick={() => onRemoveTasks(uid)}>
                Delete
              </Button>
            )}
          </div>
        </Card.Content>
        <Card.Content>
          {(!users || !Object.keys(users).includes(userUid)) && <Container centerd>
            <Rating
              defaultRating={0}
              maxRating={5}
              size={'massive'}
              icon='star'
              onRate={(e, data) => this.setState({ rating: data.rating })}
            />
            <Button  disabled={!this.state.rating} onClick={this.handleSubmit.bind(this)}> Submit </Button>
          </Container>}
        </Card.Content>
      </Card>
    )
  }
}
