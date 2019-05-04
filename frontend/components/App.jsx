import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignInFormContainer from "./session_form/signin_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <>
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header-left">
          <div className="company-logo"></div>
          <h1 id="company-h1">DeskLamp</h1>
        </div>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/signin" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={SignInFormContainer} />
    </Switch>
  </>
);

export default App;
