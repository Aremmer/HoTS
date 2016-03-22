(function() {
  'use strict';

  angular.module('HeroesOfTheStormApp', ['ui.router'])
    .config(MainRouter)
    .controller('HeroesController', HeroesController)
    // Initilizing the Ui-router for making a SPA
  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('LandingPage', {
        url: "/",
        templateUrl: "./LandingPage.html",
      })

    .state('HomePage', {
      url: "/HomePage",
      templateUrl: "./HomePage.html",
    })

    .state('HeroBuild', {
      url: '/HeroBuild',
      templateUrl: './HeroBuild.html'
    })
    $urlRouterProvider.otherwise('/')
  }

  function HeroesController($http) {
    var hots = this


    $http.get('HoTS.json')
      .success(function(response) {
        console.log(response.heroes)
        hots.heroes = response.heroes

        hots.roleFilters = []

        function getRole() {
          return (heroe.filter(function(arrEl) {
            for (var i = 0; i < roleFilters.length; i++) {
              if (hero.role === roleFilters[i]) {
                return true
              } else {
                return false
              }
            }
          }))
        }

      })


  }




}());
