import {AuthStore} from "../redux/auth/Auth.store";

export class State {
    auth: AuthStore;

    constructor() {
        this.auth = new AuthStore();
    }
}