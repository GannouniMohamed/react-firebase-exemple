import React, { Component } from 'react'
import { Container, Form, Message, Progress, Button } from 'semantic-ui-react'

import { withFirebase } from '../Firebase'
import { PDFReader } from '../PDFReader' 
class ProfilForm extends Component {
  constructor (props) {
    super(props)
    this.uploadFile = this.uploadFile.bind(this)
    this.getFile = this.getFile.bind(this)
    this.state = {
      showProgress: false,
      select: true,
      msg: '',
      progress: 0,
      visible: false
    }
  }
  componentDidMount () {
    this.props.firebase.document(this.props.authUser.uid).on('value', (snapshot) => {
      this.setState({
        user: snapshot.val()
      })
    })
  }

  componentWillUnmount () {
    this.props.firebase.document(this.props.authUser.uid).off()
  }
  getFile (event) {
    const file = event.target.files[0]
    this.setState({ file, select: false })
  }

  uploadFile (event) {
    const { firebase, authUser: { username, email } } = this.props
    const { file } = this.state
    const metadata = { contentType: 'application/pdf' }
    this.setState({ showProgress: true })
    if (file) {
      const storageRef = firebase.storage.ref()
      const mountainsRef = storageRef.child(`CV/${this.props.authUser.username}.pdf`)
      const uploadTask = mountainsRef.put(file, metadata)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
          this.setState({ progress })
        },
        (error) => {
          this.setState({ error })
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            firebase.document(this.props.authUser.uid).set({ downloadURL, username, email }).then(() => {
              this.setState({ visible: true, select: true, showProgress: false })
              setTimeout(() => this.setState({ visible: false }), 3000)
            })
          })
        }
      )
    }
  }

  render () {
    const { visible, progress, select, showProgress } = this.state
    const { authUser: { username, email } } = this.props
    return (
      <Container>
        <style>
          {`
          .inputfile {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }
          `}
        </style>
        <Form>
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-name'
            label='Name'
            placeholder='Name'
            name='name'
            value={username}
          />
          <Form.Input
            fluid
            id='form-subcomponent-shorthand-input-email'
            label='Email'
            placeholder='Email'
            name='email'
            value={email}
          />

          {select && (
            <div>
              <input accept='application/pdf' type='file' className='inputfile' id='embedpollfileinput' onChange={this.getFile} />
              <label htmlFor='embedpollfileinput' className='ui huge green centered fluid button'>
                <i className='ui file pdf outline icon' />
                  Select File
              </label>
            </div>
          )}
          {!select && (
            <div>
              {this.state.file.name}
              <Button
                basic
                fluid
                disabled={showProgress}
                size='large'
                onClick={this.uploadFile}
                color='green'
                content='Upload'
                icon='upload'
              />
            </div>
          )}
          {!select && showProgress && <Progress percent={progress} indicating />}
          {visible && <Message positive>Your file is uploaded</Message>}
        </Form>
        {this.state.user && this.state.user.downloadURL ? <PDFReader file={this.state.user.downloadURL} /> : <div style={{padding: '9em 0em'}} className='ui horizontal divider hidden' />}
      </Container>
    )
  }
}

export default withFirebase(ProfilForm)
