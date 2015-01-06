'use strict';

var editor = angular.module('myApp.editor', ['ui.ace']);



editor.controller('EditorCtrl', ['$scope', function($scope) {
	$scope.aceLoaded = function(_editor){
		_editor.setShowPrintMargin(false);
	};
}]);

console.log("editor.js");