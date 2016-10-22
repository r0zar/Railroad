class DirectionsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/directions/directions.json')
      .then(response => {
        this.directions = response.data;
      });
  }
}

export const directions = {
  template: require('./directions.html'),
  controller: DirectionsController
};
