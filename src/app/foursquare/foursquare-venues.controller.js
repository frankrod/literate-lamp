(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .controller('FoursquareVenuesController', FoursquareVenuesController);

  /** @ngInject */
  function FoursquareVenuesController(FoursquareVenuesService, $log) {
    var vm = this;
    var limit = 50;
    var offset = 0;
    vm.next = next;
    vm.back = back;
    vm.downloadExcelFile = downloadExcelFile();
    getVenues(offset);

    function getVenues(offset) {
      return FoursquareVenuesService.getAllVenues(offset)
        .then(function(data) {
          $log.info(data);
          return vm.items = data.response.groups[0].items;
        })
        .catch(function(err) {
          $log.error(err);
        });
    }

    function next() {
      offset += limit;
      return getVenues(offset);
    }

    function back() {
      offset -=limit;
      if (offset<0) {
        offset = 0;
      }
      return getVenues(offset);
    }

    function downloadExcelFile() {
      return FoursquareVenuesService.downloadExcel();
    }
  }
})();
