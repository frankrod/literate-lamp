/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('foursquarevenues')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('serverUrl', 'https://foursquare-venues-api.herokuapp.com/');

})();
