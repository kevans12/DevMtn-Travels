angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
  $scope.travelInfo = mainSrv.travelInfo;
  $scope.package = '';

  if($stateParams.id) {
    console.log("entered");
    for(var i = 0; i < $scope.travelInfo.length; i++) {
      // console.log($scope.travelInfo[i]);
      if($stateParams.id == $scope.travelInfo[i].id) {
        $scope.package = $scope.travelInfo[i];
      }
    }
    console.log($scope.package)
  }

})
