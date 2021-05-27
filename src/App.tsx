import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, StoreProvider } from 'easy-peasy';
import './App.global.css';
import storeModal from './state';

import MainView from './views/mainView/MainView.component';

const store = createStore(storeModal);

export default function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={MainView} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}
