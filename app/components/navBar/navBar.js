angular.module('components')
    .directive('navBar', function ($rootScope) {

        return {
            // template: "<h1>Hello World</h1>",
            templateUrl: 'app/components/navBar/navBar.tpl.html',
            restrict: "A,E,C",
            scope: {
                brand: "@",
                navItems: "=",
                selectedItem: "&" //function
            },
            link: function (scope, element, attrs) {
                    $rootScope.$on("PRODUCT_SELECTED", function (evt, args) {
                        console.log(args);
                    });
                }
                //A for Attribute
                //E Element 
                //C Class
        };
    });
