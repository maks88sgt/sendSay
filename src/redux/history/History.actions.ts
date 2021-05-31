import {Action} from 'redux';

import {HistoryItemType, HistoryStore} from "./History.store";

export class HistoryActions {
    static PREFIX = 'HISTORY_';

    static UPDATE_STORE = `${HistoryActions.PREFIX}UPDATE_STORE`;
    static SAVE_REQUEST_HISTORY_ITEM = `${HistoryActions.PREFIX}SAVE_REQUEST_HISTORY_ITEM`;

    static updateStore = (partialStore: Partial<HistoryStore>): Action => {
        return {
            type: HistoryActions.UPDATE_STORE,
            payload: partialStore,
        };
    }

    static saveRequestHistoryItem = (historyItem: Omit<HistoryItemType, 'name'>): Action => {
        return {
            type: HistoryActions.SAVE_REQUEST_HISTORY_ITEM,
            payload: historyItem,
        };
    }
}