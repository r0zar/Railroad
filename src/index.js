import angular from 'angular';

// object modules
import {usersModule} from './app/users/index';
import {listingsModule} from './app/listings/index';
import {bookingsModule} from './app/bookings/index';
import {confirmationsModule} from './app/confirmations/index';
import {directionsModule} from './app/directions/index';

import 'angular-ui-router';
import routesConfig from './routes';

// common
import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

// objects
import {users} from './app/users/users';
import {listings} from './app/listings/listings';
import {bookings} from './app/bookings/bookings';
import {confirmations} from './app/confirmations/confirmations';
import {directions} from './app/directions/directions';

import sessions from './app/sessions/sessions'


import './index.scss';
import config from './config';


angular
  .module('app', [sessions.name, usersModule, listingsModule, bookingsModule, confirmationsModule, directionsModule, 'ui.router'])
  .config(routesConfig)
  .config(config)
  .component('app', main)
  .component('users', users)
  .component('listings', listings)
  .component('bookings', bookings)
  .component('confirmations', confirmations)
  .component('directions', directions)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
