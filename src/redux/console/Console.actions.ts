import {Action} from 'redux';

import {ConsoleStore} from "./Console.store";

export class ConsoleActions {
    static PREFIX = 'CONSOLE_';

    static UPDATE_STORE = `${ConsoleActions.PREFIX}UPDATE_STORE`;
    static SEND_REQUEST = `${ConsoleActions.PREFIX}SEND_REQUEST`;

    static updateStore = (partialStore: Partial<ConsoleStore>): Action => {
        return {
            type: ConsoleActions.UPDATE_STORE,
            payload: partialStore,
        };
    }

    static sendRequest = (request: string): Action  => {
        return {
            type: ConsoleActions.SEND_REQUEST,
            payload: request,
        };
    }
}