export default class Sessions {

  /** @ngInject */
  constructor(firebase) {

    this.signedIn = false;

    this.login = (email, password) => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.signedIn = true;
      });
    };

    this.logout = () => {
      return firebase.auth().signOut().then(() => {
        this.signedIn = false;
      });
    };

    this.register = (email, password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then((resp) => {
        this.signedIn = true;
      });
    };

  }

}
