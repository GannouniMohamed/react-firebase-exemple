import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import {
	Menu,
	Responsive,
	Segment,
	Container,
	Button,
	Sidebar,
	Icon,
	Header
} from 'semantic-ui-react';

import * as ROUTES from '../../constants/routes';
const getWidth = () => window.innerWidth;

class NavigationNonAuth extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });
	handleSidebarHide = () => this.setState({ sidebarOpened: false });
	handleToggle = () => this.setState({ sidebarOpened: true });

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const lastScrollY = window.scrollY;
		if (lastScrollY > 60) {
			this.showFixedMenu();
		} else {
			this.hideFixedMenu();
		}
	};

	render() {
		const { fixed } = this.state;
		const { sidebarOpened } = this.state;
		return (
			<div>
				<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
					<Menu borderless fixed={'top'} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
						<Container text>
							<Link to="/">
								<Menu.Item as="h1" header>
									Company Name SERVICES
								</Menu.Item>
							</Link>
						</Container>
						<Container>
							<Route
								path={ROUTES.LANDING}
								exact={true}
								children={({ match }) => (
									<Menu.Item as={Link} to={ROUTES.LANDING} active={!!match}>
										Home
									</Menu.Item>
								)}
							/>
							<Route
								path={ROUTES.SERVICES}
								exact={true}
								children={({ match }) => (
									<Menu.Item  as={Link} to={ROUTES.SERVICES} active={!!match}>
										Services
									</Menu.Item>
								)}
							/>
 							<Route
								path={ROUTES.UPLOAD}
								exact={true}
								children={({ match }) => (
									<Menu.Item as={Link} to={ROUTES.UPLOAD} active={!!match}>
										Upload CV
									</Menu.Item>
								)}
							/>
							<Route
								path={ROUTES.ABOUT}
								exact={true}
								children={({ match }) => (
									<Menu.Item as={Link} to={ROUTES.ABOUT} active={!!match}>
										About us
									</Menu.Item>
								)}
							/>
							<Route
								path={ROUTES.CONTACT}
								exact={true}
								children={({ match }) => (
									<Menu.Item as={Link} to={ROUTES.CONTACT} active={!!match}>
										Contact us
									</Menu.Item>
								)}
							/>
							<Menu.Item position="right">
								<Link to={ROUTES.SIGN_IN}>
									<Button inverted={!fixed}>Log in</Button>
								</Link>
								<Link to={ROUTES.SIGN_UP}>
									<Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
										Sign Up
									</Button>
								</Link>
							</Menu.Item>
						</Container>
					</Menu>
				</Responsive>
				<Responsive
					as={Sidebar.Pushable}
					getWidth={getWidth}
					maxWidth={Responsive.onlyMobile.maxWidth}
					style={{
						opacity: 0.8
					}}
				>
					<Sidebar
						as={Menu}
						animation="push"
						inverted
						onHide={this.handleSidebarHide}
						vertical
						visible={sidebarOpened}
					>
						<Route
							path={ROUTES.LANDING}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.LANDING} active={!!match}>
									Home
								</Menu.Item>
							)}
						/>
						<Route
							path={ROUTES.SERVICES}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.SERVICES} active={!!match}>
									Services
								</Menu.Item>
							)}
						/>
 						<Route
							path={ROUTES.UPLOAD}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.UPLOAD} active={!!match}>
									Upload CV
								</Menu.Item>
							)}
						/> 
						<Route
							path={ROUTES.ABOUT}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.ABOUT} active={!!match}>
									About us
								</Menu.Item>
							)}
						/>
						<Route
							path={ROUTES.SIGN_IN}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.SIGN_IN} active={!!match}>
									Log in
								</Menu.Item>
							)}
						/>
						<Route
							path={ROUTES.SIGN_UP}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.SIGN_UP} active={!!match}>
									Sign Up
								</Menu.Item>
							)}
						/>
						<Route
							path={ROUTES.CONTACT}
							exact={true}
							children={({ match }) => (
								<Menu.Item as={Link} to={ROUTES.CONTACT} active={!!match}>
									Contact us
								</Menu.Item>
							)}
						/>
					</Sidebar>

					<Sidebar.Pusher dimmed={sidebarOpened}>
						<Segment inverted textAlign="center" style={{ minHeight: 350, padding: '1em 0em' }} vertical>
							<Container fluid>
								<Menu inverted pointing secondary size="large">
									<Menu.Item onClick={this.handleToggle}>
										<Icon name={sidebarOpened ? 'arrow left' : 'sidebar'} />
									</Menu.Item>
									<Menu.Item position="right">
										<Link to={ROUTES.SIGN_IN}>
											<Button inverted>Log in</Button>
										</Link>
										<Link to={ROUTES.SIGN_UP}>
											<Button inverted style={{ marginLeft: '0.5em' }}>
												Sign Up
											</Button>
										</Link>
									</Menu.Item>
								</Menu>
							</Container>
							<Container text>
								<Header
									as="h1"
									content="Company Name SERVICES"
									inverted
									style={{
										fontSize: '2em',
										fontWeight: 'normal',
										marginBottom: 0,
										marginTop: '1.5em'
									}}
								/>
								<Header
									as="h2"
									content="Agency specialized in the recruitment of executives and leaders in France and abroad."
									inverted
									style={{
										fontSize: '1.5em',
										fontWeight: 'normal',
										marginTop: '0.5em'
									}}
								/>
							</Container>
						</Segment>
					</Sidebar.Pusher>
				</Responsive>
			</div>
		);
	}
}

export default NavigationNonAuth;
