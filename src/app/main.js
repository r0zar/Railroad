class MainController {
  /** @ngInject */
  constructor($scope, $state, firebase) {

    $scope.login = (email, password) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then( function(){
          $scope.signedIn = true;
          $state.go('listings');
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          $scope.signedIn = false;
        });
    }

  }


}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
