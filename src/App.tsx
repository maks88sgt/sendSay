import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import {LoginPage} from './components/login/LoginPage';
import {configureRedux} from "./config/configureRedux";
const {
  store, persistor, history,
} = configureRedux();


function App(): JSX.Element {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/">
              <LoginPage/>
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
