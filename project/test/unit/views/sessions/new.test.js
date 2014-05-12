describe('sessions new.html', function () {
    var  template, scope, filter;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile, $filter) {
        var templateHtml = $templateCache.get('sessions/new.html');
        $scope = $rootScope.$new();

        $scope.new = function() {

        };

        template = $($compile(templateHtml)($scope));
        $scope.$digest();

        scope  = $scope;
        filter = $filter;
    }));
});