(function () {
  "use strict";

  angular.module("NarrowItDownApp", []).controller("NarrowItDownController", NarrowItDownController).service("MenuSearchService", MenuSearchService).directive("foundItems", foundItemsDirective);

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.showNothingFoundMessage = false;

    ctrl.getFoundItems = function () {
      if (ctrl.searchTerm) {
        MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (result) {
          if (result.length == 0) {
            ctrl.showNothingFoundMessage = true;
            ctrl.found = [];
          } else {
            ctrl.showNothingFoundMessage = false;
            ctrl.found = result;
          }
        });
      } else {
        ctrl.showNothingFoundMessage = true;
        ctrl.found = [];
      }
    };

    ctrl.onRemove = function (itemIndex) {
      ctrl.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      }).then(function (result) {
        // keep items that match
        var foundItems = [];
        result.data.menu_items.forEach(function (menuItem) {
          if (menuItem.description.indexOf(searchTerm) > -1) {
            foundItems.push(menuItem);
          }
        });

        // return found items
        return foundItems;
      });
    };
  }

  function foundItemsDirective() {
    var ddo = {
      templateUrl: "foundItems.html",
      restrict: "E",
      scope: {
        foundItems: "<",
        onRemove: "&",
      },
    };

    return ddo;
  }
})();
