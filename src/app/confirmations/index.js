import angular from 'angular';

import {confirmation} from './confirmation';
import {confirmations} from './confirmations';

export const confirmationsModule = 'confirmations';

angular
  .module(confirmationsModule, [])
  .component('fountainConfirmation', confirmation)
  .component('fountainConfirmations', confirmations);
