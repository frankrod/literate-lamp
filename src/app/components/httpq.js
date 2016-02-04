'use strict';

angular.module('foursquarevenues')
  .factory('httpqService', function($http, $q, serverUrl) {
    var factory = {};
    factory.getApiUrl = function(resource) {
      return (serverUrl || '') + resource;
    };
    factory.get = function(resource) {
      var defer = $q.defer();
      $http.get(factory.getApiUrl(resource)).success(function(data) {
        defer.resolve(data);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    };
    factory.post = function(resource, payload) {
      var defer = $q.defer();
      $http.post(factory.getApiUrl(resource), payload).success(function(data) {
        defer.resolve(data);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    };
    factory.put = function(resource, payload) {
      var defer = $q.defer();
      $http.put(factory.getApiUrl(resource), payload).success(function(data) {
        defer.resolve(data);
      }).error(function(error) {
        defer.reject(error);
      });
      return defer.promise;
    };
    return factory;
  });
