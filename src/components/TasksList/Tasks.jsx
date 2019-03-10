import React, { Component } from 'react';
import { Message, Button, Container, Divider } from 'semantic-ui-react'

import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import TasksList from './TasksList';
import * as ROLES from '../../constants/roles';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      tasks: [],
      limit: 3,
    };
  }

  componentDidMount() {
    this.onListenForTasks();
  }

  onListenForTasks = () => {
    this.setState({ loading: true });

    this.props.firebase
      .taskLists()
      .orderByChild('createdAt')
      .limitToLast(this.state.limit)
      .on('value', snapshot => {
        const taskObject = snapshot.val();

        if (taskObject) {
          const taskList = Object.keys(taskObject).map(key => ({
            ...taskObject[key],
            uid: key,
          }));

          this.setState({
            tasks: taskList,
            loading: false,
          });
        } else {
          this.setState({ tasks: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.props.firebase.taskLists().off();
  }

  onRate = (uid, rate, userUid) => {
    this.props.firebase.onRate(uid, rate, userUid).push({
      userUid
    });
    this.props.firebase.onRateAddUser(uid, userUid).push({
      userUid
    });
  };

  onRemoveTasks = uid => {
    this.props.firebase.taskList(uid).remove();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 3 }),
      this.onListenForTasks,
    );
  };

  render() {
    const { tasks, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <Container>
            {!loading && tasks && (
              <Button type="button" onClick={this.onNextPage}>
                 Load more
              </Button>
            )}
            <Divider hidden />
            {loading && <Message>Loading ...</Message>}
            { tasks && <TasksList
              isAdmin={authUser.roles.includes(ROLES.ADMIN)}
              data={tasks}
              onRemoveTasks={this.onRemoveTasks.bind(this)}
              onRate={this.onRate.bind(this)}
              userUid={authUser.uid}
              />
            }
            {!tasks && <Message>There are no tasks ...</Message>}
          </Container>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Tasks);
