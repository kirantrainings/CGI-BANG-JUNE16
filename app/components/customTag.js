angular.module('components')
    .directive('customTag', function ($compile) {
        return {
            restrict: "A",
            link: function (scope, element, atts) {
                var htmlString = "<h1>{{companyName}}</h1>";
                var linkFn = $compile(htmlString);
                var content = linkFn(scope);
                element.append(content);
            }
        };
    });
