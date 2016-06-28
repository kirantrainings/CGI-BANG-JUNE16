angular.module('salesApp')
    .controller('mainCtrl', function ($scope) {
        $scope.companyName = "Consultant For Govt and Industry";


        $scope.headerUrl = "app/common/header.tpl.html";
        var loginUrl = "app/login/login.tpl.html";
        var registerUrl = "app/register/register.tpl.html";
        var productUrl = "app/products/products.tpl.html";

        $scope.loadContentTemplate = function (type) {
            $scope.contentUrl= type.templateUrl;
          /*  if (type == 'login') {
      $scope.contentUrl = loginUrl;
  }
  if (type == "register") {
      $scope.contentUrl = registerUrl;
  }
  if (type == 'products') {
      $scope.contentUrl = productUrl;
  }*/
        };

        $scope.tabs = [{
                name: "Login",
                templateUrl: "app/login/login.tpl.html"
            },
            {
                name: "Register",
                templateUrl: "app/register/register.tpl.html"
            },
            {
                name: "Products",
                templateUrl: "app/products/products.tpl.html"
            }];
    });
