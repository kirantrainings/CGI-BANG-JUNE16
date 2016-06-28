angular.module('components')
    .directive('navBar', function () {

        return {
            // template: "<h1>Hello World</h1>",
            templateUrl: 'app/components/navBar/navBar.tpl.html',
            restrict: "A,E,C",
            controller: function ($scope) {
                    $scope.brand = "CGI";
                }
                //A for Attribute
                //E Element 
                //C Class
        };
    });
