class MainController {
  /** @ngInject */
  constructor($scope, $state, Sessions) {

    $scope.loading = false;
    $scope.retrying = false;

    $scope.login = (email, password) => {
      $scope.loading = true;
      Sessions.login(email, password).then(()=>{
        $scope.loading = false;
        $scope.signedIn = true;
        $scope.$apply();
        $state.go('listings');
      }).catch((resp)=>{
        console.log(resp);
        $scope.loading = false;
        $scope.$apply();
        if (resp.code == 'auth/network-request-failed') {
          $scope.retrying = true;
          $scope.$apply();
          Sessions.login(email, password).then(()=>{
            $state.go('listings');
          })
        }
      })
    };

    $scope.register = (email, password) => {
      $scope.loading = true;
      Sessions.register(email, password).then(()=>{
        $scope.loading = false;
        $scope.signedIn = true;
        $scope.$apply();
        $state.go('listings');
      }).catch((resp)=>{
        $scope.loading = false;
        $scope.$apply();
        if (resp.code == 'auth/network-request-failed') {
          $scope.retrying = true;
          $scope.$apply();
          Sessions.login(email, password).then(()=>{
            $state.go('listings');
          }).catch((resp)=>{
            $scope.loading = false;
            $scope.$apply();
            if (resp.code == 'auth/network-request-failed') {
              $scope.retryingagain = true;
              $scope.$apply();
              Sessions.login(email, password).then(()=>{
                $state.go('listings');
              })
            }
        })
      }});
    };


  }



}

export const main = {
  template: require('./main.html'),
  controller: MainController

};
