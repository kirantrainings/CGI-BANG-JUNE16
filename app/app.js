//module Creation.

angular.module('salesApp', ['login', 'register', 'products']);


//extending the module with config function.
angular.module('salesApp')
    .config(function () {
        console.log("I am the main module");
    });
