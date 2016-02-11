'use strict'

angular.module('services', [])
	.value('tva', 1.20)
	
	.provider('cart', {
		$get : function(tva){
			var provider = this;
			return {

				rows : [],

				addBook : function(book){

					var index = this.getBook(book);
					if(index == -1){
						this.rows.push({book : book, quantite : 1});	
					}
					else{
						this.rows[index].quantite +=1;
					}
				},

				getBook : function(book){
					var tab = this.rows;
					var index = -1;
					angular.forEach(tab, function(item){
						if (item.book['ISBN-10'] === book['ISBN-10']){
							index = tab.indexOf(item);
						};
					});
					return index;
				},

				totalHt : function(row){
					return row.book.price * row.quantite;
				},

				prixTtc : function(row){
					return this.totalHt(row) * (1+tva);
				},

				isBig : function(row){
					return this.totalHt(row) > provider.limit;
				}

			};
		},
		limit : 1000
	})

	.factory('state', function(){
		var stateCache = {};
		return function (pageId, initialValue) {
        	return stateCache[pageId] || (stateCache[pageId] = initialValue);
    	};
	})

	.factory('sortOptionsService', function () {
    	var list = [
			{expr: 'price', reverse: false, label: "Prix croissant"},
			{expr: 'price', reverse: true,  label: "Prix décroissant"},
			{expr: 'title', reverse: false, label: "Titre"}
		];
		return {
			list: list,
			default: list[0]
		};
	})

	.factory('catalogService', function ($http) {
		var url = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
		var promise = $http.get(url).then(function (response) {
			return response.data;
		});
		return {
			getList: function () {
				return promise;
			},
			getBook: function (id) {
				return promise.then(function (bookList) {
					for (var i = 0 ; i < bookList.length ; i++) {
						if (bookList[i]._id.$oid == id) {
							return bookList[i];
						}
					}
					throw "Not found";
				});
			}
		};
	})



		