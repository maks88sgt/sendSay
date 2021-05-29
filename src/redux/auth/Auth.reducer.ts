import {AuthStore} from './Auth.store';
import {Action} from 'redux';
import {AuthActions} from "./Auth.actions";

export const authReducer = (state = new AuthStore(), action: Action) => {
  switch (action.type) {
    case AuthActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};