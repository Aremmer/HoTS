;(function () {
  'use strict'

  angular.module('heroesFilter', [])
  .filter('roleFilter', function () {
    return function (hero, roleList) {
        for (var j = 0; j < roleList.length; j++) {
          if (hero.role == roleList[j]) {
            return true
          }
        }

      return false
    }
  })

}())
