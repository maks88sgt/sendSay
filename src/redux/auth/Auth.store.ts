export class AuthStore {
    isLoading: boolean;
    sessionKey: string;
    login: string;
    sublogin: string;
    loginError: null | object;

    constructor() {
      this.isLoading = false;
      this.sessionKey = '';
      this.login = '';
      this.sublogin = '';
      this.loginError = null;
    }
}