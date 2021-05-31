export class ConsoleStore {
    request: null |string;
    response: null | string;
    isFetching: boolean;
    responseSuccess: boolean;

    constructor() {
      this.request = null;
      this.response = null;
      this.isFetching = false;
      this.responseSuccess = false;
    }
}