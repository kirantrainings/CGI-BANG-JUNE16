angular.module('register')
    .controller('registerCtrl', function ($scope, lookupSvc, $state) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
            $state.go('Login', {
                username: $scope.user.firstName
            });
        };
        lookupSvc.getCountries().then(function (response) {
            console.log("hello i am in the callback");
            $scope.countries = response.data.countries
        }).catch(function (response) {
            $scope.showError = "Error Occurred";
        });

        $scope.$watchCollection("user", function (newVal, oldVal) {

            console.log(newVal);
            console.log(oldVal);
        });


    });
