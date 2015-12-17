describe('app', function () {
    beforeEach(module('app'));
    var ctrl, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('tableController', {
            $scope: scope
        });
    }));

    it('should have defined tableController', function () {
        expect(ctrl).toBeDefined();
    });
});
