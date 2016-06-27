//module Creation.

angular.module('login', []);


//extending the module with config function.
angular.module('login')
    .config(function () {
        console.log("I am the login module");
    });
