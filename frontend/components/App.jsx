import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../helper/route_helper";

import { SplashComponent } from './splash';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import OrganizationFormContainer from './organization_form/organization_form_container';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/organizations" component={OrganizationFormContainer} />
      <AuthRoute exact path="/" component={SplashComponent} />
    </Switch>
  </>
);

export default App;
