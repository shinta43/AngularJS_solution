(function () {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.checkText = function () {
      var lunch = $scope.items;
      var lunchList = lunch.split(",");

      if ($scope.items == 0) {
        $scope.message = "Please enter data first";
      } else if (lunchList.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();
