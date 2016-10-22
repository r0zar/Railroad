class ListingsController {
  /** @ngInject */
  constructor($http, $scope) {

    $http
      .get('app/listings/listings.json') // https://sheltersafe-acc35.firebaseio.com/listings
      .then(response => {
        console.log(response.data);
        this.listings = response.data;
      })
      .catch(err => {
        console.log(err);
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
