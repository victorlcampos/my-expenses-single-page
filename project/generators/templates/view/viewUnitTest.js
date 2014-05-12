describe('<%= controllerName %> <%= name %>.html', function () {
    var  template, scope, filter;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile, $filter) {
        var templateHtml = $templateCache.get('<%= controllerName %>/<%= name %>.html');
        $scope = $rootScope.$new();

        $scope.<%= name %> = function() {

        };

        template = $($compile(templateHtml)($scope));
        $scope.$digest();

        scope  = $scope;
        filter = $filter;
    }));
});