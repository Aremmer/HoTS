;
(function() {
  'use strict'
  // ========================================================================== //
  angular.module('HeroesOfTheStormApp', ['ui.router', 'heroesFilter','myFactory'])
    .config(MainRouter)
    .controller('HeroesController', HeroesController)

  // Initilizing the Ui-router states for making a SPA
  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('LandingPage', {
        url: '/',
        templateUrl: '/HTML/LandingPage.html',
      })

    .state('HomePage', {
      url: '/HomePage',
      templateUrl: '/HTML/HomePage.html',
    })

    .state('HeroBuild', {
      url: '/HeroBuild',
      templateUrl: '/HTML/HeroBuild.html'
    })

    $urlRouterProvider.otherwise('/')
  }

// ========================================================================== //

  function HeroesController($http, heroFactory) {
    $('.parallax').parallax();
    var hots = this
    hots.roles = ['Warrior', 'Assassin', 'Support', 'Specialist']

    // HomePage Hero toggle filter
    // ========================================================================== //
    hots.addRole = function($event) {
      var index = hots.roles.indexOf($event.target.id)
      console.log($event.target.id, index)
      if (index >= 0) {
        hots.roles.splice(index, 1)
        console.log('slicing', hots.roles);
      } else {
        hots.roles.push($event.target.id)
      }

    }
    // import data from myFactory
    heroFactory.getAll()
      .then(function(response){
        console.log("Getting all Heroes")
        console.log(response)
        hots.heros = response.data
      })
    // // Formating to call data
    // $http.get('/api/v2/heroes')
    //   .success(function(response) {
    //     console.log(response.heros)
    //     hots.heroes = response.heros
    //   })
    //   console.log(hots.heroes)

    // ========================================================================== //
    // Callback Function that singles out individual heroes to display build recommendations
    // and seperates a designated set of talents from the Talent Tree
    // ========================================================================== //
    hots.talentArray = []

    hots.showBuild = function(hero){
      hots.activeHero = hero

      if (hots.talentArray.length > 0){
        return hots.talentArray = []
      }
        for (var i = 0, k = 1; i < hero.recommendBuildKey.length; i++, k+=3) {
          hots.talentArray.push(hero.talents[k][hero.recommendBuildKey[i]-1])
          console.log(hots.talentArray)
        }
        // console.log(hots.talentArray[0].name);
      window.location.href = "/#/HeroBuild"
    }

  }


  // ========================================================================== //




}())
