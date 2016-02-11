'use strict'

angular.module('routageApp', ['ngRoute', 'catalogMod', 'bookMod', 'cartMod', 'services', 'app.directives'])
	.config(function($routeProvider){
		$routeProvider.otherwise({
			redirectTo : '/catalog'
		});
	})
	.config(function(cartProvider){
		cartProvider.limit = 200;
	})
