import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signIn } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootElement = document.getElementById('root');

  window.signIn = signIn;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, rootElement);
});
