angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
  $scope.travelInfo = mainSrv.travelInfo;
  // $scope.package = '';

  // if ($stateParams.id){
  //   for (var i = 0; i < $scope.travelInfo.length; i++) {
  //     if($stateParams.id == $scope.travelInfo[i].id) {
  //       $scope.package = $scope.travelInfo[i];
  //     }
  //   }
  // }
});
