class HeaderController {
  /** @ngInject */
  constructor($scope, $state, firebase) {


    $scope.authStatus = (user) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('signed in');
          $scope.signedIn = true;
        } else {
          // No user is signed in.
          console.log('not signed in');
          $scope.signedIn = false;
        }
      });
    }

    $scope.logout = () => {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('signed out');
        $scope.signedIn = false;
        $state.go('app');
      }, function(error) {
        // An error happened.
        console.log('well, seems like you\'re stuck here');
        $scope.signedIn = true;
      });
    }

  }


}

export const header = {
  template: require('./header.html'),
  controller: HeaderController
};
