export default class Sessions {

  /** @ngInject */
  constructor(firebase) {

    this.login = (email, password) => {
      console.log(email, password);
      return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    this.logout = () => {
      return firebase.auth().signOut();
    };

  }

  authStatus(user) {
    this.firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log('signed in');
        this.signedIn = true;
      } else {
        // No user is signed in.
        console.log('not signed in');
        this.signedIn = false;
      }
    });
  }







}
