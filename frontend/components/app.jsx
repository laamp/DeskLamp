import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../helper/route_helper";

import NotFound from './not_found_404';
import { SplashComponent } from './splash';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import OrganizationFormContainer from './organization_form/organization_form_container';
import OrganizationHome from './organization/organization_container';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/organizations" component={OrganizationFormContainer} />
      <ProtectedRoute path="/organizations/:organizationId" component={OrganizationHome} />
      <ProtectedRoute path="/hubs/:hubId" component={SplashComponent} />
      <Route exact path="/" component={SplashComponent} />
      <Route path="*" component={NotFound} />
    </Switch>
  </>
);

export default App;