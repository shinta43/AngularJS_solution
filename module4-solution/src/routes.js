(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/data/templates/main-categories.template.html',
        controller: 'CategoriesController as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/item/{categoryShortName}',
        templateUrl: 'src/data/templates/main-items.template.html',
        controller: 'ItemsController as items'
      });
  }

})();
