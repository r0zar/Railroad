class MainController {
  /** @ngInject */
  constructor($scope, Registration) {


    $scope.register = Registration.register;

  }


}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
