(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .factory('FoursquareVenuesService', FoursquareVenuesService);

  /** @ngInject */
  function FoursquareVenuesService(httpqService) {
    var service = {
      getAllVenues: getAllVenues,
      getVenue: getVenue
    }

    return service;

    function getAllVenues(offset) {
      return httpqService.get('venues?offset='+offset);
    }

    function getVenue(venueId) {
      return httpqService.get('venue/'+venueId);
    }

  }
})();
