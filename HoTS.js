;
(function() {
  'use strict'
  // ========================================================================== //
  angular.module('HeroesOfTheStormApp', ['ui.router', 'heroesFilter'])
    .config(MainRouter)
    .controller('HeroesController', HeroesController)

  // Initilizing the Ui-router states for making a SPA
  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('LandingPage', {
        url: '/',
        templateUrl: '../HTML/LandingPage.html',
      })

    .state('HomePage', {
      url: '/HomePage',
      templateUrl: '../HTML/HomePage.html',
    })

    .state('HeroBuild', {
      url: '/HeroBuild',
      templateUrl: '../HTML/HeroBuild.html'
    })

    $urlRouterProvider.otherwise('/')
  }

// ========================================================================== //

  function HeroesController($http) {
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

    // Formating to call specific JSON data
    $http.get('/HoTS.json')
      .success(function(response) {
        console.log(response.heroes)
        hots.heroes = response.heroes
      })

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
