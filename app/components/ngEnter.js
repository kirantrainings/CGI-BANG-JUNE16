angular.module('components')
    .directive('ngEnter', function () {
        return {
            link: function (scope, element, attrs) {

                element.bind('keypress', function (evt) {
                    if (evt.keyCode == "13") {
                        scope.$eval(attrs["ngEnter"]);
                    }
                })
            }
        }
    })
