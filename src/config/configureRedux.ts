import {
    applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import {
    createMigrate, persistReducer, persistStore,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {authReducer} from "../redux/auth/Auth.reducer";
import {persistMigrations} from "./persistMigrations";
import {persistTransform} from "./persistTransform";
import {rootSaga} from "../sagas/rootSaga";


function getComposer() {
    const devtoolsComposer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
    if (devtoolsComposer) {
        return devtoolsComposer({ trace: true, traceLimit: 25 });
    }

    return compose;
}

const sagaMiddleware = createSagaMiddleware();

export function makeMiddleware(history: History) {
    const middleware = applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
    );
    return middleware;
}

export function configureRedux() {
    const composer = getComposer();
    const history = createBrowserHistory();
    const reducers = makeReducers(history);

    const enhancer = composer(makeMiddleware(history));

    const store = createStore(reducers, enhancer);

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);
    return {
        store,
        persistor,
        history,
    };
}

function makeReducers(history) {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        auth: authReducer,
    });

    return persistReducer<any>(
        {
            key: 'root',
            storage,
            version: 1,
            blacklist: ['router'],
            transforms: [persistTransform],
            stateReconciler: autoMergeLevel2,
            migrate: createMigrate(persistMigrations),
        },
        rootReducer
    );
}