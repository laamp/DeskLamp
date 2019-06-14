import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Loading from "./components/loading";
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const rootElement = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, rootElement);
});
