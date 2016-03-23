;(function () {
  'use strict'

  angular.module('HeroesOfTheStormApp', ['ui.router', 'heroesFilter'])
    .config(MainRouter)
    .controller('HeroesController', HeroesController)

  // Initilizing the Ui-router for making a SPA
  function MainRouter ($stateProvider, $urlRouterProvider) {
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

  function HeroesController ($http) {
    var hots = this
    hots.roles = ['Warrior', 'Assassin', 'Support', 'Specialist']

    hots.addRole = function ($event) {
      var index = hots.roles.indexOf($event.target.id)
      console.log($event.target.id, index)
      if (index >= 0) {
        hots.roles.splice(index, 1)
        console.log('slicing',hots.roles);
      }
      else{
        hots.roles.push($event.target.id)
      }

    }

    $http.get('HoTS.json')
      .success(function (response) {
        console.log(response.heroes)
        hots.heroes = response.heroes

      })

  }

}())
