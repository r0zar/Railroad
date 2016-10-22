import angular from 'angular';

import {booking} from './booking';
import {bookings} from './bookings';

export const bookingsModule = 'bookings';

angular
  .module(bookingsModule, [])
  .component('fountainBooking', booking)
  .component('fountainBookings', bookings);
