import { reject } from 'q';

export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });

    return promise;
  }
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
