class DirectionsController {
  /** @ngInject */
  constructor($http, $scope) {
    $http
      .get('app/directions/directions.json')
      .then(response => {
        this.directions = response.data;
      });

    $scope.create = (direction) => {
      console.log(direction);
    };
  }
}

export const directions = {
  template: require('./directions.html'),
  controller: DirectionsController
};
