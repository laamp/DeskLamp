import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { loadState, saveState } from "./localStorage";

let store;
const persistedState = loadState();

export const manualSave = () => {
  saveState(store.getState());
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    let comboState = Object.assign({}, preloadedState, persistedState);
    store = configureStore(comboState);

    store.subscribe(() => {
      saveState(store.getState());
    });

    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootElement);
});
