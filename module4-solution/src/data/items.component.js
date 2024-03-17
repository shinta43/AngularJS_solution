(function () {
  'use strict';

  angular.module('Data')
  .component('items', {
    templateUrl: 'src/data/templates/items.template.html',
    bindings: {
      elements: '<'
    }
  });

})();
