angular.module('salesApp')
    .service('lookupSvc', function ($http, $q) {
        var countries;
        this.getCountries = function () {
            //Step 1 Create the deferred Object.
            var dfd = $q.defer();
            if (countries) {
                dfd.resolve(countries);
            } else {
                $http.get('app/data/lookup.json')
                    .then(function (response) {
                        countries = response;
                        dfd.resolve(response);
                        console.log(response);
                    }).catch(function (errorResponse) {
                        dfd.reject(errorResponse);
                        console.log(errorResponse);
                    });
            }
            return dfd.promise;
        }
    });
