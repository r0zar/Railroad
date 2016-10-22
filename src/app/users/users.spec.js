import angular from 'angular';
import 'angular-mocks';
import {users} from './users';

const usersJson = [
  {
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('users component', () => {
  beforeEach(() => {
    angular
      .module('fountainUsers', ['app/users/users.html'])
      .component('fountainUsers', users);
    angular.mock.module('fountainUsers');
  });
  it('should render 3 elements <fountain-user>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/users/users.json').respond(usersJson);
    const element = $compile('<fountain-users></fountain-users>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const users = element.find('fountain-user');
    expect(users.length).toEqual(3);
  }));
});
