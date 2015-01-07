'use strict';

var editor = angular.module('myApp.editor', ['ui.ace']);



editor.controller('EditorCtrl', ['$scope', function($scope) {
	$scope.aceLoaded = function(_editor){
		_editor.setShowPrintMargin(false);
		_editor.setTheme("ace/theme/monokai");
	    _editor.getSession().setMode("ace/mode/javascript");
	};
}]);

console.log("editor.js");