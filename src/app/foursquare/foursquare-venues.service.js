(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .factory('FoursquareVenuesService', FoursquareVenuesService);

  /** @ngInject */
  function FoursquareVenuesService(httpqService) {
    var service = {
      getAllVenues: getAllVenues,
      getVenue: getVenue,
      downloadExcel: downloadExcel
    }

    return service;

    function getAllVenues(offset) {
      return httpqService.get('venues?offset='+offset);
    }

    function getVenue(venueId) {
      return httpqService.get('venue/'+venueId);
    }

    function downloadExcel() {
      return httpqService.get('excel')
    }

  }
})();
