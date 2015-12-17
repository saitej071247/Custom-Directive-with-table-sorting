app.controller('tableController', ['$scope', 'jsonService', function ($scope, jsonService) {
       $scope.data = jsonService.employees;
}]);