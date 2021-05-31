import {AuthStore} from '../redux/auth/Auth.store';
import {ConsoleStore} from "../redux/console/Console.store";

export class State {
    auth: AuthStore;
    console: ConsoleStore

    constructor() {
      this.auth = new AuthStore();
      this.console = new ConsoleStore();
    }
}