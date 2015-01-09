'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor', {
    templateUrl: 'table/table.html',
    controller: 'tableCtrl'
  });
}])

.controller('tableCtrl', [function() {

}]);

console.log("table.js");