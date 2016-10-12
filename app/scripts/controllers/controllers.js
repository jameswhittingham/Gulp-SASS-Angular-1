'use strict';

angular.module('myApp')

/* Main controller */
.controller('MainCtrl', function ($scope, fileService, $interval, $sce) {

	/* Calls service to get data.js file */
	fileService.getFile('scripts/data/data.js').then(function(data){
		/* Set panels scope var */
		$scope.panels = data.panels;
	}, function(err){ 
		/* Issues getting/reading file */
		alert('Error returning data');
	});

	/* Renters string as HTML */
	$scope.renderHtml = function(html_code) {
		return $sce.trustAsHtml(html_code);
	};

});
