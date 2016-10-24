class ListingsController {
  /** @ngInject */
  constructor($http, $scope) {

    $scope.signedIn = true;
    $scope.loading = true;
    $scope.results = [];


    $http
      .get('app/listings/listings.json').then((myData)=>{
        $scope.results = myData;
      });

    $scope.search = (param) => {
        console.log(param);
        angular.forEach($scope.results.title, function(value, key) {
          console.log(value, key);
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
