import React from 'react'

import AuthUserContext from './context'
import { withFirebase } from '../Firebase'

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        authUser: JSON.parse(localStorage.getItem('authUser'))
      }
    }

    // async componentWillMount() {
    //   try {
    //     const messagingToken = await this.props.firebase.askForPermissioToReceiveNotifications();
    //     localStorage.setItem('messagingToken', messagingToken);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    componentDidMount () {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          localStorage.setItem('authUser', JSON.stringify(authUser))
          this.setState({ authUser })
        },
        () => {
          localStorage.removeItem('authUser')
          this.setState({ authUser: null })
        }
      )
    }

    componentWillUnmount () {
      this.listener()
    }

    render () {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
};

export default withAuthentication
