import angular from 'angular';

import {user} from './user';
import {users} from './users';

export const usersModule = 'users';

angular
  .module(usersModule, [])
  .component('fountainUser', user)
  .component('fountainUsers', users);
