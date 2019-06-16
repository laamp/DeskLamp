import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import Loading from "./components/loading";
import configureStore from './store/store';
import { loadState, saveState } from "./localStorage";

let store;
const persistedState = loadState();

export const manualSave = () => {
  saveState(store.getState());
};

window.manualSave = manualSave;

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
  window.store = store; //for testing

  const rootElement = document.getElementById('root');

  // ReactDOM.render(<Loading />, rootElement);
  ReactDOM.render(<Root store={store} />, rootElement);
});
