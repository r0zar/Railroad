class HeaderController {
  /** @ngInject */
  constructor($scope, $state, Sessions) {

    $scope.signedIn = true;
    $scope.loading = false;

    $scope.logout = () => {
      $scope.loading = true;
      Sessions.logout().then(()=>{
        $scope.loading = false;
        $scope.signedIn = false;
        $scope.$apply();
        $state.go('app');
      }).catch((resp)=>{
        console.log(resp.message);
        $scope.loading = false;
        $scope.$apply();
      })
    };


  }


}

export const header = {
  template: require('./header.html'),
  controller: HeaderController
};
