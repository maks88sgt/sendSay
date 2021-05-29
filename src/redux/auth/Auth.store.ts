export class AuthStore {
    isLoading: boolean;
    sessionKey: string;
    login: string;
    sublogin: string;
    password: string;
    loginError: null | string;
    authSuccess: boolean;

    constructor() {
      this.isLoading = false;
      this.sessionKey = '';
      this.login = '';
      this.sublogin = '';
      this.password = '';
      this.loginError = null;
      this.authSuccess = false;
    }
}