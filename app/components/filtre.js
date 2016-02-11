'use strict'

angular.module('FilterApp', [])
	.filter('searchPrice', function(){
			function searchPrice(catalogue, search) {
				return catalogue.filter(function(book){
					return (!search) || ((!search.prixmini || book.price >= search.prixmini) && (!search.prixmaxi || book.price <= search.prixmaxi));	
				})
			};
			return searchPrice;
		})
