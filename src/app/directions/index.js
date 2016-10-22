import angular from 'angular';

import {direction} from './direction';
import {directions} from './directions';

export const directionsModule = 'directions';

angular
  .module(directionsModule, [])
  .component('fountainDirection', direction)
  .component('fountainDirections', directions);
