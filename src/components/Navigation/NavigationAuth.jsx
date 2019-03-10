import React from 'react'
import { Link, Route } from 'react-router-dom'
import { Menu, Responsive, Container, Sidebar, Icon, Image, Dropdown, Segment, Header } from 'semantic-ui-react'
import { withState, compose } from 'recompose'
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'
import * as ROLES from '../../constants/roles'

const withPusher = withState('open', 'setOpen', false)
const getWidth = () => window.innerWidth

const NavigationAuth = ({ authUser, open, setOpen }) => (
  <div>
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Menu borderless fixed={'top'}>
        <Container text>
          <Link to='/'>
            <Menu.Item as='h1' header>
              Company Name SERVICES
            </Menu.Item>
          </Link>
        </Container>
        <Container text>
          <Route
            path={ROUTES.LANDING}
            exact
            children={({ match }) => (
              <Menu.Item as={Link} to={ROUTES.LANDING} active={!!match}>
                Landing
              </Menu.Item>
            )}
          />
          {!authUser.roles.includes(ROLES.ADMIN) && (
            <Route
              path={ROUTES.HOME}
              exact
              children={({ match }) => (
                <Menu.Item as={Link} to={ROUTES.HOME} active={!!match}>
                  Profil
                </Menu.Item>
              )}
            />
          )}
          {authUser.roles.includes(ROLES.ADMIN) && (
            <Route
              path={ROUTES.ADMIN}
              exact
              children={({ match }) => (
                <Menu.Item as={Link} to={ROUTES.ADMIN} active={!!match}>
                  Profils
                </Menu.Item>
              )}
            />
          )}
          <Menu.Item position='right'>
            <Dropdown
              trigger={
                <Image
                  style={{ maxWidth: 40, maxHeight: 40 }}
                  circular
                  src={authUser.providerData[0].photoURL}
                />
              }
              options={[
                { key: 'settings', text: authUser.username },
                {
                  key: 'user',
                  value: 1,
                  text: 'Account',
                  content: (
                    <Link to={ROUTES.ACCOUNT}>
                      <div style={{ width: 300, height: '100%', color: 'black', fontWeight: 'bold' }}>
                        <Icon name={'user'} color={'black'} size={'large'} />
                        Account
                      </div>
                    </Link>
                  )
                },
                {
                  key: 'sign-out',
                  value: 2,
                  text: 'Sign Out',
                  content: <SignOutButton inverted={false}> Sign Out </SignOutButton>
                }
              ]}
              pointing='top right'
              icon={null}
            />
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
      <Sidebar as={Menu} animation='push' inverted onHide={() => setOpen(false)} vertical visible={open}>
        <Menu.Item position='right'>
          <Image style={{ maxWidth: 120, maxHeight: 120 }} circular src={authUser.providerData[0].photoURL} />
        </Menu.Item>

        <Route
          path={ROUTES.LANDING}
          exact
          children={({ match }) => (
            <Menu.Item as={Link} to={ROUTES.LANDING} active={!!match}>
              Landing
            </Menu.Item>
          )}
        />
        <Route
          path={ROUTES.HOME}
          exact
          children={({ match }) => (
            <Menu.Item as={Link} to={ROUTES.HOME} active={!!match}>
              Profil
            </Menu.Item>
          )}
        />
        <Route
          path={ROUTES.ACCOUNT}
          exact
          children={({ match }) => (
            <Menu.Item as={Link} to={ROUTES.ACCOUNT} active={!!match}>
              Account
            </Menu.Item>
          )}
        />
        <Menu.Item as='a' position='right'>
          <SignOutButton inverted color={'white'}>
            Sign Out
          </SignOutButton>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={open}>
        <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
          <Container fluid>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={() => setOpen(!open)}>
                <Icon name={open ? 'arrow left' : 'sidebar'} />
              </Menu.Item>
            </Menu>
          </Container>
          <Container text>
            <Header
              as='h1'
              content='Company Name SERVICES'
              inverted
              style={{
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '1.5em'
              }}
            />
          </Container>
        </Segment>
      </Sidebar.Pusher>
    </Responsive>
  </div>
)

export default compose(withPusher)(NavigationAuth)
