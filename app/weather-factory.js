(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function WeatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };
        return service;

        ////////////////

        function getWeather(searchPlace) {



            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather',
                params: {
                    APPID: 'c16715c848abd993229ad9db93506a08',
                    q: searchPlace,


                },
            }).then(function(response) {

                return response.data;

            });
        }
    }
})();
