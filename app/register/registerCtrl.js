angular.module('register')
    .controller('registerCtrl', function ($scope, lookupSvc) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
        };
        lookupSvc.getCountries().then(function (response) {
            console.log("hello i am in the callback");
            $scope.countries = response.data.countries
        }).catch(function (response) {
            $scope.showError = "Error Occurred";
        });

        console.log("Hey how r  u");
    });
