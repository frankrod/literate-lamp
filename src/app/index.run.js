(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
