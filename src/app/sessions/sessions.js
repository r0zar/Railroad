import angular from 'angular';
import Sessions from './sessions.service.js';

export default angular.module('sessions', [])
  .service('Sessions', Sessions)
