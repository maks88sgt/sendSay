import {PersistState} from "redux-persist/es/types";
import {AuthStore} from "../redux/auth/Auth.store";

const initialState = {};

export type AppPersistState = {
    auth: AuthStore;
    _persist: PersistState;
};

export const persistMigrations: any = {
    1: (state: AppPersistState) => {
        return {
            ...state,
            ...initialState,
        };
    },
};