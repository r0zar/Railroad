export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('registration', {
      url: '/registration',
      component: 'registration',
    })
    .state('sessions', {
      url: '/sessions',
      component: 'sessions',
    })
    .state('users', {
      url: '/users',
      component: 'users',
    })
    .state('listings', {
      url: '/listings',
      component: 'listings',
    })
    .state('bookings', {
      url: '/bookings',
      component: 'bookings',
    })
    .state('confirmations', {
      url: '/confirmations',
      component: 'confirmations',
    })
    .state('directions', {
      url: '/directions',
      component: 'directions',
    });
}
