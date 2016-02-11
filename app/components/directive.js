'use strict'

angular.module('app.directives', [])
    .directive('rating', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.rating, function (value) {
                    // element.text(value == undefined ? '' : value);
                    var html = '',
                        img = '<img src="images/star.png"/>';
                    for (var i = 0 ; i < value ; i++) {
                        html += img;
                    }
                    element.html(html);
                });
            }
        };
    })
