angular.module('salesApp')
    .controller('mainCtrl', function ($scope) {
        $scope.brandName = "CGI";
        $scope.headerUrl = "app/common/header.tpl.html";
        var loginUrl = "app/login/login.tpl.html";
        var registerUrl = "app/register/register.tpl.html";
        var productUrl = "app/products/products.tpl.html";

        $scope.loadContentTemplate = function (type) {
            if (type == 'login') {
                $scope.contentUrl = loginUrl;
            }
            if (type == "register") {
                $scope.contentUrl = registerUrl;
            }
            if (type == 'products') {
                $scope.contentUrl = productUrl;
            }
        }
    });
