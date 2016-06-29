//module Creation.

angular.module('login', []);


//extending the module with config function.
angular.module('login')
    .config(function () {
        console.log("I am the login module");
    });

angular.module('login')
    .controller('loginCtrl', function ($scope, $state) {
        $scope.user = {};
        console.log($state);
        $scope.user.username = $state.params.username;
    });
