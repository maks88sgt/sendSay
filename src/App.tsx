import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import {configureRedux} from "./config/configureRedux";
import {AppRouterContainer} from "./containers/AppRouter.container";

const {
  store, persistor, history,
} = configureRedux();


function App(): JSX.Element {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouterContainer/>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
