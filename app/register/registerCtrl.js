angular.module('register')
    .controller('registerCtrl', function ($scope) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
        };
    });
