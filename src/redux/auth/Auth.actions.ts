import {Action} from 'redux';

import {AuthStore} from "./Auth.store";

export class AuthActions {
    static PREFIX = 'AUTH_';

    static UPDATE_STORE = `${AuthActions.PREFIX}UPDATE_STORE`;
    static TRY_LOGIN = `${AuthActions.PREFIX}TRY_LOGIN`;

    static updateStore = (partialStore: Partial<AuthStore>): Action  => {
        return {
            type: AuthActions.UPDATE_STORE,
            payload: partialStore,
        };
    }

    static tryLogIn = (loginData: Partial<AuthStore>): Action  => {
        return {
            type: AuthActions.TRY_LOGIN,
            payload: loginData,
        };
    }
}