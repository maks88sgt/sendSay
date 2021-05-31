import {State} from "../config/State";

export const getCredentials = (state: State) => {
    return {
        password: state.auth.password,
        login: state.auth.login,
        sublogin: state.auth.sublogin
    };
};

export const getSessionKey = (state:State) => state.auth.sessionKey;

export const getCurrentHistory = (state:State) => state.history.current;
