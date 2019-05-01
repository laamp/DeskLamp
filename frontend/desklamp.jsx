import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signIn = SessionApiUtil.signIn;
  window.signUp = SessionApiUtil.signUp;
  window.signOut = SessionApiUtil.signOut;

  ReactDOM.render(<h1>DeskLamp: React Component</h1>, rootElement);
});
