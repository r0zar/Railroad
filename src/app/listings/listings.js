class ListingsController {
  /** @ngInject */
  constructor($http, $scope, Sessions) {

    $scope.login = Sessions.login;

    $http
      .get('app/listings/listings.json')
      .then(response => {
        this.listings = response.data;
      });

    $scope.create = (listing) => {
      console.log(listing);
    };

  }


}

export const listings = {
  template: require('./listings.html'),
  controller: ListingsController
};
