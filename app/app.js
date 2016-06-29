//module Creation.

angular.module('salesApp', ['login', 'register', 'products', 'components', 'ui.router']);


//extending the module with config function.
angular.module('salesApp')
    .config(function ($stateProvider) {
        console.log("I am the main module");
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller:"loginCtrl",
            params:{username:""}
        };
        var productsObj = {
            templateUrl: "app/products/products.tpl.html"
        };
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: 'registerCtrl'
        };

        $stateProvider.state("Login", loginObj);
        $stateProvider.state("Register", registerObj);
        $stateProvider.state("Products", productsObj);
    });
