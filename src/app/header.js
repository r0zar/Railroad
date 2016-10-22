class HeaderController {
  /** @ngInject */
  constructor($scope, $state, Sessions) {

    $scope.loggedIn = false;

    $scope.login = (user) => {
      Sessions.login;
      $state.go('listings');
      $scope.loggedIn = true;
      console.log(`${user} is logged in.`);
    };

    $scope.logout = (user) => {
      Sessions.logout;
      $state.go('app');
      $scope.loggedIn = false;
      console.log(`${user} is logged out.`);
    };

  }


}

export const header = {
  template: require('./header.html'),
  controller: HeaderController
};
