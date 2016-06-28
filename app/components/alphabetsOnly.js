angular.module("components")
    .directive("alphabetsOnly", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                element.bind('keypress', function (evt) {
                    var expression = new RegExp(/^[a-zA-Z. ]*$/);
                    if (!expression.test(evt.key)) {

                        evt.preventDefault();
                    }
                });
            }
        };
    })
