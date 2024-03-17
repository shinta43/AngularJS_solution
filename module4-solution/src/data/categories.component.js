(function () {
  'use strict';

  angular.module('Data')
  .component('categories', {
    templateUrl: 'src/data/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
