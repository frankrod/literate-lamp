(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })
      .when('/', {
        templateUrl: 'app/foursquare/foursquare-venues.html',
        controller: 'FoursquareVenuesController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
