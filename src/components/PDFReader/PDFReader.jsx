import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Container, Button, Icon, Grid } from 'semantic-ui-react';

export default class PDFReader extends Component {
	state = { numPages: null, pageNumber: 1 };

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () => {
		if (this.state.pageNumber === 1) {
			return;
		}
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	};
	goToNextPage = () => {
		if (this.state.pageNumber === this.state.numPages) {
			return;
		}
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
	};

	render() {
		const { pageNumber, numPages } = this.state;

		return (
			<Container text textAlign="center" style={{ margin: '2em 0em', backgroundColor: '#F2F2F2' }}>
				<nav style={{ margin: '2em 0em' }}>
					<Grid columns="equal">
						<Grid.Row>
							<Grid.Column textAlign="center">
								<Button onClick={this.goToPrevPage}>
									<Icon name="arrow left" />Prev
								</Button>
							</Grid.Column>
							<Grid.Column textAlign="center">
								Page {pageNumber} of {numPages}
							</Grid.Column>
							<Grid.Column textAlign="center">
								<Button onClick={this.goToNextPage}>
									Next <Icon name="arrow right" />
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</nav>

				<Container textAlign="center" style={{ width: 600 }}>
					<Document file={this.props.file} onLoadSuccess={this.onDocumentLoadSuccess}>
						<Page pageNumber={pageNumber} width={600} />
					</Document>
				</Container>
			</Container>
		);
	}
}
