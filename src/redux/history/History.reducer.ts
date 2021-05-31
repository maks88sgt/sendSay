import {Action} from 'redux';
import {HistoryStore} from "./History.store";
import {HistoryActions} from "./History.actions";

export const historyReducer = (state = new HistoryStore(), action: Action) => {
  switch (action.type) {
    case HistoryActions.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};