describe('Header.html', function () {
    var  template;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile) {
        var templateHtml = $templateCache.get('partials/header.html');

        $scope = $rootScope.$new();
        template = $compile(templateHtml)($scope);
        $scope.$digest();
    }));

    it('should show hello world', function () {
        expect(template.find("div").text()).toContain('Minhas Despesas');
        expect(template.find("div").text()).toContain('Fulano');
    });
});