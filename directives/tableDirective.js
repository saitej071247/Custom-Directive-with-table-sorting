app.directive('ngTable', function () {
    return {
        scope: {

        },
        restrict: 'A',
        templateUrl: 'View/tableTemplate.html',
        controller: 'tableController',
        controllerAs: 'tableController'
    }

});