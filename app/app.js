//module Creation.

angular.module('salesApp', ['login', 'register', 'products', 'components', 'ui.router']);


//extending the module with config function.
angular.module('salesApp')
    .config(function ($stateProvider) {
        console.log("I am the main module");
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl",
            params: {
                username: ""
            }
        };
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller: "productCtrl",
            resolve: {
                products: function () {
                    return [
                        {
                            "category": "Gadgets",
                            "name": "iPhone",
                            "price": "60000",
                            "model": "6s"
        },
                        {
                            "category": "Apparels",
                            "name": "pepeJeans",
                            "price": "4000",
                            "model": "6ABCDs"
        },
                        {
                            "category": "Living",
                            "name": "IFB Washing Machine",
                            "price": "40000",
                            "model": "Front Load"
        }
    ];
                },
                productsFromSvc: function (productSvc) {
                    return productSvc.getProducts();
                }
            }
        };
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: 'registerCtrl'
        };

        $stateProvider.state("Login", loginObj);
        $stateProvider.state("Register", registerObj);
        $stateProvider.state("Products", productsObj);
    });
