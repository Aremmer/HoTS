// angular.module("HeroesOfTheStormApp").factory("HeroesFactory", [function() {
//   function returnFilteredHeroes() {
//     return function (hero, roleList) {
//         for (var j = 0; j < roleList.length; j++) {
//           if (hero.role == roleList[j]) {
//             return true
//           }
//         }
//
//       return false
//     }
//   }
//   function getHeroesByDifficulty() {
//     return function (hero, roleList) {
//         for (var j = 0; j < roleList.length; j++) {
//           if (hero.role == roleList[j]) {
//             return true
//           }
//         }
//
//       return false
//     }
//   }
//   return {
//     getFilteredHeroes: returnFilteredHeroes,
//     getHeroesByDifficulty: getHeroesByDifficulty
//   };
// }])
