class ListingsController {
  /** @ngInject */
  constructor($http, $scope) {

    $scope.signedIn = true;

    $scope.search = (param) => {
      $scope.loading = true;
      $scope.results = [];
      $http
        .get('app/listings/listings.json', {
          cache: true,
          params: { search: param }
        })
        .success(function (results) {
          $scope.loading = false;
          $scope.results = results;
        })
        .error(function (err) {
          $scope.loading = false;
          throw new Error (err);
        });
    };

    $scope.openModal = () => {
      console.log("click");
      modal.style.display = "block";
    };

    $scope.closeModal = () => {
      console.log("close");
      modal.style.display = "none";
    };

    // Get the modal
    var modal = document.getElementById('myModal');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

export const listings = {
  template: require('./listings.html'),
  controller: ListingsController
};
