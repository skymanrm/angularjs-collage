function CollageController($scope) {
    'use strict';

    console.log('CollageController');

    $scope.images = [
        {src: 'http://placekitten.com/g/200/300', width: 200, height: 300},
        {src: 'http://placekitten.com/g/250/350', width: 250, height: 350},
        {src: 'http://placekitten.com/g/500/300', width: 500, height: 300},
        {src: 'http://placekitten.com/g/400/1000', width: 400, height: 1000},
        {src: 'http://placekitten.com/g/400/200', width: 400, height: 200},
        {src: 'http://placekitten.com/g/240/340', width: 240, height: 340},
        {src: 'http://placekitten.com/g/500/700', width: 500, height: 700},
        {src: 'http://placekitten.com/g/1500/500', width: 1500, height: 500}
    ];
}

collageTestApp.controller('CollageController', ['$scope', CollageController]);