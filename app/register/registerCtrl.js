angular.module('register')
    .controller('registerCtrl', function ($scope) {
        $scope.user = {};
        $scope.registerUser = function () {
            console.log($scope.user);
        };
        $scope.countries = [{
                "name": "India",
                "code": "IN",
                "ISDCode": "+91",
                "continent": "Asia"
            },
            {
                "name": "Canada",
                "code": "CA",
                "ISDCode": "+45",
                "continent": "North America"
            },
            {
                "name": "United States",
                "code": "US",
                "continent": "America",
                ISDCode: "+1"
            }];

    });
