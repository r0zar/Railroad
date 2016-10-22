class BookingsController {
  /** @ngInject */
  constructor($http, $scope) {
    $http
      .get('app/bookings/bookings.json')
      .then(response => {
        this.bookings = response.data;
      });

    $scope.create = (booking) => {
      console.log(booking);
    };

  }
}

export const bookings = {
  template: require('./bookings.html'),
  controller: BookingsController
};
