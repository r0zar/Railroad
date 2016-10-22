import angular from 'angular';
import 'angular-mocks';
import {user} from './user';

describe('user component', () => {
  beforeEach(() => {
    angular
      .module('fountainUser', ['app/users/user.html'])
      .component('fountainUser', user);
    angular.mock.module('fountainUser');
  });

  it('should render Gulp', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    const element = $compile('<fountain-user user="fixture"></fountain-user>')($scope);
    $scope.$digest();
    const user = element.find('h3');
    expect(user.html().trim()).toEqual('Gulp');
  }));
});
