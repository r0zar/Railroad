import angular from 'angular';
import Registration from './registration.service.js';

export default angular.module('registration', [])
  .service('Registration', Registration)
