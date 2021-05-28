import {AuthStore} from './Auth.store';
import {Action} from 'redux';

export const authReducer = (state = new AuthStore(), action: Action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
      };

    default:
      return state;
  }
};