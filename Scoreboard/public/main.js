
angular.module("scoreBoardApp", [])
  .controller("mainController", ($scope) => {

    $scope.scoreOne = 0;
    $scope.scoreTwo = 0;

    $scope.addScoreOne = () => {
      $scope.scoreOne++;
    };

    $scope.subtractScoreOne = () => {
      $scope.scoreOne--;
    };

    $scope.addScoreTwo = () => {
      $scope.scoreTwo++;
    };

    $scope.subtractScoreTwo = () => {
      $scope.scoreTwo--;
    };

  });