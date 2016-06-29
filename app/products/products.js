//module Creation.

angular.module('products', []);



//extending the module with config function.
angular.module('products')
    .config(function () {
        console.log("I am the products module");
    });


angular.module('products')
    .controller('productCtrl', function ($scope, products, productsFromSvc, $rootScope, $state) {

        $scope.products = productsFromSvc;
        /* productSvc.getProducts().then(function (response) {
             $scope.products = response.data.products;
             console.log($scope.products);
         }).catch(function (response) {
             $scope.showError = "Error Occured";
         });*/
        console.log(productsFromSvc);
        $scope.showSelectedItem = function (product) {
            $scope.product = product;
            $rootScope.$broadcast("PRODUCT_SELECTED", {
                item: product
            });
            $state.transitionTo("Products.product");
        }
    });


angular.module('products')
    .service('productSvc', function ($http, $q) {

        this.getProducts = function () {
            var dfd = $q.defer();
            $http.get('app/data/products.json')
                .then(function (response) {
                    dfd.resolve(response.data.products);
                }).catch(function (errorResponse) {
                    dfd.reject(errorResponse);
                });
            return dfd.promise;
        };
    });
