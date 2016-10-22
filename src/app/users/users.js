class UsersController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/users/users.json')
      .then(response => {
        this.users = response.data;
      });
  }
}

export const users = {
  template: require('./users.html'),
  controller: UsersController
};
