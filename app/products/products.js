//module Creation.

angular.module('products', []);



//extending the module with config function.
angular.module('products')
    .config(function () {
        console.log("I am the products module");
    });
