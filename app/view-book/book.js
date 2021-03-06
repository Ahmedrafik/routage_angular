'use strict'

angular.module('bookMod', ['ngRoute', 'ngSanitize', 'services'])
	.config(function($routeProvider){
		$routeProvider.when('/book/:id', {
			templateUrl : 'view-book/book.html',
			controller : 'BookController',
			controllerAs : 'bookCtrl'
		});
	})
	.controller('BookController', function($http, $scope, $routeParams, $rootScope, catalogService){
		var bookCtrl = this;
		var URL = "https://api.mongolab.com/api/1/databases/books/collections/books/" + $routeParams.id + "?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i";

		/*$http.get(URL)
		    .then(function (response) {
		    	bookCtrl.book = response.data;
		    	$rootScope.pageTitle = bookCtrl.book.title;
		    }, function (response) {
	        	throw "Erreur de chargement du livre";
	    	});*/

		catalogService.getBook($routeParams.id)
			.then(function (data) {
				bookCtrl.book = data;
			}, function (error) {
				bookCtrl.error = error;
			});



	})