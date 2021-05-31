import {Action} from 'redux';
import {ConsoleStore} from "./Console.store";
import {ConsoleActions} from "./Console.actions";

export const consoleReducer = (state = new ConsoleStore(), action: Action) => {
  switch (action.type) {
    case ConsoleActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};