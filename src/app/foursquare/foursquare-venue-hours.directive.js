(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .directive('venueHours', venueHours);

  /** @ngInject */
  function venueHours() {
    var directive = {
      restrict: 'E',
      template: '<p ng-repeat="hour in vm.hours track by $index">{{hour}}<p>',
      scope: {
        venueId: '@'
      },
      controller: VenueHoursController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function VenueHoursController(FoursquareVenuesService, $log) {
      var vm = this;
      var hours = [];
      var hoursObj ={};

      FoursquareVenuesService.getVenue(vm.venueId)
        .then(function(data) {
          $log.info(data);
          if (typeof data.response.venue.hours != "undefined") {
            var timeframes = data.response.venue.hours.timeframes
            angular.forEach(timeframes, function(timeframe){
              var daysOpen = timeframe.days;
              var open = timeframe.open[0].renderedTime;
              hoursObj[daysOpen] = open;
              hours.push(hoursObj);
            })
            vm.hours = hours;
          }
        })
        .catch(function(err) {
          $log.error(err);
        })
    }
  }

})();
