import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInFormContainer from "./session_form/signin_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SignUpFormContainer} />
    </Switch>
  </>
);

export default App;
