'use strict'

angular.module('routageApp', ['ngRoute', 'catalogMod', 'bookMod'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/catalog'
		});
	})
