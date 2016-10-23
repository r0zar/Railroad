import angular from 'angular';
import sessions from './sessions.service';

export default angular.module('sessions', [])
  .service('Sessions', sessions);
