import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignInFormContainer from "./session_form/signin_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <h1>DeskLamp</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
