import {
  applyMiddleware, combineReducers, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from 'src/store/reducers/index';
import rootSaga from 'src/store/sagas/index';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(
    combineReducers({
      auth: persistReducer(persistConfig, rootReducer.auth),
    }),
    initialState,
    bindMiddleware([sagaMiddleware])
  );
  const persistor = persistStore(store);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return {
    store,
    persistor,
  };
}

export default configureStore;
