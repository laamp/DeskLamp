import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignInFormContainer from "./session_form/signin_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <header>
      <h1>DeskLamp</h1>
      <GreetingContainer />
    </header>

    <Route path="/signin" component={SignInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
