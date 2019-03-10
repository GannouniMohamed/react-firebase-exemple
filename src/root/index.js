import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import { Navigation } from '../components/Navigation'
import LandingPage from '../pages/LandingPages'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SingInPages'
import PasswordForgetPage from '../pages/PasswordForgetPage'
import HomePage from '../pages/HomePage'
import AccountPage from '../pages/AccountPage'
import AdminPage from '../pages/AdminPage'
import UploadPage from '../pages/UploadPage'
import ServicesPage from '../pages/ServicesPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

import * as ROUTES from '../constants/routes'
import { withAuthentication } from '../components/Session'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
})

const App = () => (
  <BrowserRouter>
    <Route
      render={({ location }) => (
        <div>
          <Navigation />
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path={ROUTES.LANDING} component={LandingPage} key='LANDING' />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} key='signup' />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} key='signin' />
                <Route path={ROUTES.SERVICES} component={ServicesPage} key='ServicesPage' />
                <Route path={ROUTES.ABOUT} component={AboutPage} key='AboutPage' />
                <Route path={ROUTES.CONTACT} component={ContactPage} key='ContactPage' />
                <Route
                  path={ROUTES.PASSWORD_FORGET}
                  component={PasswordForgetPage}
                  key='PasswordForget'
                />
                <Route path={ROUTES.HOME} component={HomePage} key='HomePage' />
                <Route path={ROUTES.ACCOUNT} component={AccountPage} key='Account' />
                <Route path={ROUTES.ADMIN} component={AdminPage} key='AdminPage' />
                <Route path={ROUTES.UPLOAD} component={UploadPage} key='UploadPage' />
                <Route component={() => (<div> <h1 style={{margin: '5em 0em'}}> 404 Not Found </h1> </div>)} />
              </Switch>
            </RouteContainer>
          </PoseGroup>

        </div>)}
    />
  </BrowserRouter>
)

export default withAuthentication(App)
