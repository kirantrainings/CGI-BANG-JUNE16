//module Creation.

angular.module('products', []);



//extending the module with config function.
angular.module('products')
    .config(function () {
        console.log("I am the products module");
    });


angular.module('products')
    .controller('productCtrl', function ($scope, productSvc) {

        productSvc.getProducts().then(function (response) {
            $scope.products = response.data.products;
            console.log($scope.products);
        }).catch(function (response) {
            $scope.showError = "Error Occured";
        });

        $scope.showSelectedItem = function (product) {
            $scope.selectedItem = product;
        }
    });


angular.module('products')
    .service('productSvc', function ($http, $q) {

        this.getProducts = function () {
            var dfd = $q.defer();
            $http.get('app/data/products.json')
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (errorResponse) {
                    dfd.reject(errorResponse);
                });
            return dfd.promise;
        };
    });
