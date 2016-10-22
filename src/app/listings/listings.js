class ListingsController {
  /** @ngInject */
  constructor($http, $scope) {

    $http
      .get('https://sheltersafe-acc35.firebaseio.com/listings')
      .then(response => {
        console.log(response.data);
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
