import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../helper/route_helper";

import { SplashComponent } from './splash';
import SignInFormContainer from './session_form/signin_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SplashComponent} />
      {/* <Route path="/organization/:organization_id" component={} /> */}
    </Switch>
  </>
);

export default App;
