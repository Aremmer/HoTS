(function() {
  'use strict';

    angular.module('HeroesOfTheStormApp', [])
      .controller('HeroesController', HeroesController)

      function HeroesController ($http){
        var hots = this

        $http.get('HoTS.json')
          .success(function(response){
            console.log(response.heroes)
            hots.heroes = response.heroes
          })
      }




}());
