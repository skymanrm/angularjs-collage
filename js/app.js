(function (window) {
    'use strict';

    var collageTestApp = angular.module('collageTestApp', []);

    collageTestApp.directive('collage', function () {
        return {
            restrict: 'E',

            scope: {
                images: '=',
                idealHeight: '=',
                rowsCount: '='
            },

            template:
            '<div class="collage">' +
                '<img ng-repeat="img in images" ng-src="{{img.src}}" width="{{img.width}}" height="{{img.height}}"/>' +
            '</div>',

            link: function (scope, element, attrs) {
                function alignImages() {
                    var viewportWidth = element.parent()[0].offsetWidth,
                        idealHeight = attrs.idealHeight,
                        images = scope.images,
                        rows = parseInt(attrs.rowsCount, 10);
                    console.log('viewportWidth: ' + viewportWidth);

                    if (rows <= 1) {
                        for (var i = 0; i < images.length; i++) {
                            images[i].width = idealHeight * images[i].width / images[i].height;
                            images[i].height = idealHeight;
                        }
                    } else {
                        var weights = images.map(function (img) {
                                return img.width * 100 / img.height;
                            }),
                            partition = window.linear_partition(weights, rows),
                            index = 0,
                            rowBuffer = [];

                        for (var i = 0; i < partition.length; i++) {
                            rowBuffer = [];
                            partition[i].forEach(function (img) {
                                rowBuffer.push(images[index++]);
                            });

                            var sumRations = rowBuffer.reduce(function (sum, img) {
                                return sum + img.width / img.height;
                            }, 0);

                            rowBuffer.forEach(function (img) {
                                img.width = Math.round(viewportWidth / sumRations * (img.width / img.height));
                                img.height = Math.round(viewportWidth / sumRations);
                            });
                        }
                    }
                }

                // if we want realign images after window size was changed
                window.addEventListener("resize", function () {
                    alignImages();
                    scope.$apply();
                });
                alignImages();
            }
        }
    });

    window.collageTestApp = collageTestApp;
}(window));