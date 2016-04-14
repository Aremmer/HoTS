;(function () {
  'use strict'
  angular.module('myFactory', [])
    .factory('heroFactory', heroFactory)

  heroFactory.$inject = ['$http']

  function heroFactory ($http) {
    var heroData = {},
        apiUrl = 'http://localhost:8080/api/v2/heroes'

    heroData.getAll = function () {
      console.log('getting all heroes')
      return $http.get(apiUrl)
    }

    heroData.buildKey = function () {
      console.log("getting hero build key")
      return $http.get(apiUrl)
    }

    // heroData.create = function (hero) {
    //   console.log('creating restaurant')
    //   return $http.post(apiUrl, hero)
    // }

    // restaurantData.delete = function (restaurant) {
    //   console.log('deleting restaurant')
    //   return $http.delete(apiUrl, restaurant)
    // }
    return heroData
  }
}())
