class ConfirmationsController {
  /** @ngInject */
  constructor($http, $scope) {
    $http
      .get('app/confirmations/confirmations.json')
      .then(response => {
        this.confirmations = response.data;
      });

    $scope.create = (confirmation) => {
      console.log(confirmation);
    };
  }
}

export const confirmations = {
  template: require('./confirmations.html'),
  controller: ConfirmationsController
};
