'use strict'

angular.module('cartMod', ['ngRoute', 'services'])
	.config(function($routeProvider){
		$routeProvider.when('/cart', {
			templateUrl : 'view-cart/cart.html',
			controller : 'CartController',
			controllerAs : 'cartCtrl'
		});
	})

	.controller('CartController', function($rootScope, cart){
		var cartCtrl=this;
		this.cartService = cart;

		$rootScope.pageTitle = 'cart';	
	})