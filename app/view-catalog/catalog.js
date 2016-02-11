'use strict'

angular.module('catalogMod', ['ngRoute', 'FilterApp'])
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

		  catalog.sortOptions = [
		  	{expr : 'price', reverse : false, label : "Prix croissant"},
		  	{expr : 'price', reverse : true, label : "Prix décroissant"},
		  	{expr : 'title', reverse : false, label : "Titre"}
		  ]	

		  catalog.search = {
		  	text : {},
		  	price : {},
		  	sort : catalog.sortOptions[0]
		  };	
	})
