class ListingsController {
  /** @ngInject */
  constructor($http, $scope) {

    $http
      .get('https://sheltersafe-acc35.firebaseio.com/listings')
      .then(response => {
        console.log(response.data);
        this.listings = response.data;
      });

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
