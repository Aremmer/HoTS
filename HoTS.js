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
        templateUrl: './LandingPage.html',
      })

    .state('HomePage', {
      url: '/HomePage',
      templateUrl: './HomePage.html',
    })

    .state('HeroBuild', {
      url: '/HeroBuild',
      templateUrl: './HeroBuild.html'
    })

    $urlRouterProvider.otherwise('/')
    }

// ========================================================================== //
// HomePage Hero toggle filter
// ========================================================================== //

  function HeroesController($http) {
    var hots = this

    // Formating to call specific JSON data
    $http.get('HoTS.json')
    .success(function(response) {
      console.log(response.heroes)
      hots.heroes = response.heroes

    })

    hots.roles = ['Warrior', 'Assassin', 'Support', 'Specialist']

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

    hots.talentArray = []

    hots.recBuildKey = []

    // loadTalents uses pushTalent to pick a *selected* index for each level in the Talent Tree
    // hots.loadTalents = function(activeHero, recBuildKey) {
    //   pushTalent(activeHero, "1", recBuildKey[0])
    //   pushTalent(activeHero, "4", recBuildKey[1])
    //   pushTalent(activeHero, "7", recBuildKey[2])
    //   pushTalent(activeHero, "10", recBuildKey[3])
    //   pushTalent(activeHero, "13", recBuildKey[4])
    //   pushTalent(activeHero, "16", recBuildKey[5])
    //   pushTalent(activeHero, "20", recBuildKey[6])
    // }

// ========================================================================== //
// Callback Function that singles out individual heroes to display build recommendations
// ========================================================================== //

    hots.oneHero = function(hero) {
      hots.activeHero = hero
      window.location.href = "/#/HeroBuild"
      console.log(hots.activeHero)
    }

// ========================================================================== //
// Set-up for recommended build display
// ========================================================================== //

// pushTalent is used to move the talent in each *selected* index of the talent object into the talentArray
    // function pushTalent(hero, level, index) {
    //   hots.talentArray.push(hero.talents[level][index - 1])
    // }
  //   // calling the loadTalent function to process each hero's recommended build
  //   hots.loadTalents(hots.activeHero, hots.activeHero.recBuildKey)
 }


// ========================================================================== //




}());
