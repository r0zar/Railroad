class HeaderController {
  /** @ngInject */
  constructor($scope, $state, Sessions) {

    $scope.signedIn = Sessions.signedIn;

    if (!$scope.signedIn) {
      $state.go('app');
    }

    $scope.logout = () => {
      Sessions.logout().then(()=> {

        $state.go('app');
      });
    }



  }

}

export const header = {
  template: require('./header.html'),
  controller: HeaderController
};
