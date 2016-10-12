// (function() {
        //     'use strict';

        //     angular
        //         .module('app')
        //         .factory('WeatherFactory', WeatherFactory);

        //     WeatherFactory.$inject = ['$http', '$q'];

        //     /* @ngInject */
        //     function WeatherFactory($http, $q) {
        //         var service = {
        //             getWeather: getWeather
        //         };
        //         return service;

        //         ////////////////

        //         function getWeather(searchPlace) {
        //             var defer = $q.defer();

        //             $http({
        //                     method: 'GET',
        //                     url: 'http://api.openweathermap.org/data/2.5/weather',
        //                     params: {
        //                         APPID: 'c16715c848abd993229ad9db93506a08',
        //                         q: searchPlace
        //                     }
        //                 })
        //                 .then(
        //                     function(response) {
        //                         if (typeof response.data === 'object') {
        //                             defer.resolve(response);


        //                         } else {
        //                             defer.reject(response);
        //                         }
        //                     },
        //                     // failure
        //                     function(error) {
        //                         defer.reject(error);

        //                     });

        //             return defer.promise;
        //         }


        //     }

        // })();

