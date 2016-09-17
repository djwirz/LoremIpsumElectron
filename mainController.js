const lorem = require('./lorem');

angular.module('clickCount', [])
.factory('Counter', () => {
  var counter = 1;
  return {
    counter: counter
  }
})
.controller("countingCtrlr", ($scope, Counter) => {
  $scope.display = lorem.loremArr[0];
  $scope.increment = () => {
    Counter.counter++;
    $scope.display = ( num => {
      if (num % 3 === 0) {
        return "Electron!";
      }
      return lorem.loremArr[num];
    })(Counter.counter);
  }
})
