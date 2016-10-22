export default class Sessions {

  /** @ngInject */
  constructor() {
  }

  login(user) {
    console.log(`logging in user: ${user}`);
  }

  logout(user) {
    console.log(`logging out user: ${user}`);
  }

}
