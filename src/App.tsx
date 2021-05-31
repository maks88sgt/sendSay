import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
    BrowserRouter,
} from 'react-router-dom';

import {configureRedux} from "./config/configureRedux";
import {AppRouterContainer} from "./containers/AppRouter.container";


const {
  store, persistor, history,
} = configureRedux();


function App(): JSX.Element {

// @ts-ignore
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter >

                <AppRouterContainer/>
            </BrowserRouter >
        </PersistGate>
      </Provider>
  );
}

export default App;
