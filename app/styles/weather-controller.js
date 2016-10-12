// (function() {
        //     'use strict';

        //     angular
        //         .module('app')
        //         .controller('MainController', MainController);

        //     MainController.$inject = ['$http', 'WeatherFactory', 'toastr'];

        //     /* @ngInject */
        //     function MainController($http, WeatherFactory, toastr) {
        //         var vm = this;
        //         vm.searchPlace;
        //         vm.name;
        //         vm.lon;
        //         vm.lat;
        //         vm.id;
        //         vm.humidity;
        //         vm.maxTemp;
        //         vm.minTemp;
        //         vm.pressure;
        //         vm.temp;
        //         vm.windSpeed;
        //         vm.dt;
        //         vm.title = 'MainController';

        //         activate();

        //         ////////////////

        //         function activate() {
        //             vm.historyList = [];

        //         }

        //         vm.getWeather = function(searchPlace) {

        //             WeatherFactory.getWeather(searchPlace).then(function(result) {

        //                     vm.name = result.data.name;
        //                     vm.humidity = (result.data.main.humidity);
        //                     vm.id = result.data.id;
        //                     vm.maxTemp = Math.ceil((result.data.main.temp_max - 273.15) * 1.8000 + 32);
        //                     vm.minTemp = Math.floor((result.data.main.temp_min - 273.15) * 1.8000 + 32);
        //                     vm.temp = Math.trunc((result.data.main.temp - 273.15) * 1.8000 + 32);
        //                     vm.pressure = result.data.main.pressure;
        //                     vm.windSpeed = result.data.wind.speed * 10;
        //                     vm.dt = Date(result.data.dt * 1000).replace('GMT-0700 (Pacific Daylight Time)', "");
        //                     vm.lat = result.data.coord.lat;
        //                     vm.lon = result.data.coord.lon;
        //                     vm.icon = result.data.weather[0].icon;


        //                     vm.historyList.push({
        //                         'name': vm.name,
        //                         'timeAndDate': vm.dt
        //                     });
        //                     toastr.success("Every thing is working!")
        //                 },
        //                 function(error) {
        //                     toastr.error("not working  " + error.data.name);


        //                 }



        //             );
        //         };
        //     };
        // })();

