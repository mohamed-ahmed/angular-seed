'use strict';

var editor = angular.module('myApp.fileExplorer', ['ui.tree']);



editor.controller('FileExplorerCtrl', ['$scope', function($scope) {
	$scope.data = [
	{
		"id": 1,
		"title": "1. dragon-breath",
		"nodes": []
	}, {
		"id": 2,
		"title": "2. moiré-vision",
		"nodes": [{
			"id": 21,
			"title": "2.1. tofu-animation",
			"nodes": [{
				"id": 211,
				"title": "2.1.1. spooky-giraffe",
				"nodes": []
			}, {
				"id": 212,
				"title": "2.1.2. bubble-burst",
				"items": []
			}],
		}, {
			"id": 22,
			"title": "2.2. barehand-atomsplitting",
			"nodes": []
		}],
	}, {
		"id": 3,
		"title": "3. unicorn-zapper",
		"nodes": []
	}, {
		"id": 4,
		"title": "4. romantic-transclusion",
		"nodes": []
	}
	];
}]);

console.log("fileExplorer.js");