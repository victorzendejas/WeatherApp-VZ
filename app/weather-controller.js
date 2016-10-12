(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$http', 'WeatherFactory', 'toastr'];

    /* @ngInject */
    function MainController($http, WeatherFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';


        activate();
        ////////////////

        function activate() {

        }

        vm.searchHistories = [];


        vm.getWeatherInfo = function(searchPlace) {


            WeatherFactory.getWeather(searchPlace).then(function(result) {
                vm.name = result.name;
                vm.temp = result.main.temp;
                vm.windspeed = result.wind.speed;
                vm.humidity = result.main.humidity;
                vm.lowtemp = result.main.temp_min;
                vm.hightemp = result.main.temp_max;
                vm.pressure = result.main.pressure;
                vm.dates = result.main.pressure;

                toastr.success("It Work! =)");

                addPlace();
            });
        };


        function addPlace() {
            vm.searchHistories.push({
                "event": vm.name,
                "date": Date.now()
            });
        };


    }
})();

//CW, BS, EP, SA
