class BookingsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/bookings/bookings.json')
      .then(response => {
        this.bookings = response.data;
      });
  }
}

export const bookings = {
  template: require('./bookings.html'),
  controller: BookingsController
};
