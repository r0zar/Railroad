class ConfirmationsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/confirmations/confirmations.json')
      .then(response => {
        this.confirmations = response.data;
      });
  }
}

export const confirmations = {
  template: require('./confirmations.html'),
  controller: ConfirmationsController
};
