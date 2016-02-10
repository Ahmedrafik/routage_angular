'use strict'

angular.module('catalogMod', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/catalog', {
			templateUrl : 'view-catalog/catalog.html',
			controller : 'CatalogController',
			controllerAs : 'catalogCtrl'
		});
	})
	.controller('CatalogController', function($http, $scope, $rootScope){
		var catalog = this;
		var TAXE = 26;
		var URL = "https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";
		$rootScope.pageTitle = 'catalogue';	
		catalog.bookList = [];

		$http.get(URL)
		    .then(function (response) {
		       catalog.bookList = response.data;
		    }, function (response) {
		        throw "Erreur de chargement du catalogue";
		    });
		
			
	})
