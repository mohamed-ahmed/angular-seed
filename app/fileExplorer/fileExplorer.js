'use strict';

var fileExplorer = angular.module('myApp.fileExplorer', ['ui.tree']);



fileExplorer.controller('FileExplorerCtrl', ['$scope', function($scope) {

	$scope.toggle = function(scope) {
      scope.toggle();
      console.log("toggle");
    };

	$scope.data = [
	{
		"id": 1,
		"title": "dragon-breath",
		"nodes": []
	}, {
		"id": 2,
		"title": "moiré-vision",
		"nodes": [{
			"id": 21,
			"title": "tofu-animation",
			"nodes": [{
				"id": 211,
				"title": "spooky-giraffe",
				"nodes": []
			}, {
				"id": 212,
				"title": "bubble-burst",
				"items": []
			}],
		}, {
			"id": 22,
			"title": "barehand-atomsplitting",
			"nodes": []
		}],
	}, {
		"id": 3,
		"title": "unicorn-zapper",
		"nodes": []
	}, {
		"id": 4,
		"title": "romantic-transclusion",
		"nodes": []
	}
	];
}]);

console.log("fileExplorer.js");