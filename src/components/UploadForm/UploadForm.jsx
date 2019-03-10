import React, { Component } from 'react';
import { Container, Form, } from 'semantic-ui-react';

class UploadForm extends Component {
	state = {
		name: '',
		email: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
  };

	render() {
		const { name, email } = this.state;

		return (
			<Container>
        <style>
          {`
          .grid.container {
            margin-top: 5em;
          }
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
				<Form onSubmit={this.props.show}>
					<Form.Input
						fluid
						id="form-subcomponent-shorthand-input-name"
						label="Name"
						placeholder="Name"
						name="name"
						value={name}
						onChange={this.handleChange}
					/>
					<Form.Input
						fluid
						id="form-subcomponent-shorthand-input-email"
						label="Email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>

					<input type="file" class="inputfile" id="embedpollfileinput" />
					<label for="embedpollfileinput" class="ui huge green centered fluid button">
						<i class="ui upload icon" />
						Upload File
					</label>

					<Form.Button basic color="blue" style={{marginTop: '1.5em'}} fluid disabled={!name || !email}>
						Submit
					</Form.Button>
				</Form>
			</Container>
		);
	}
}

export default UploadForm;
