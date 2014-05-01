describe('Home index.html', function () {
    var  template;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile) {
        var templateHtml = $templateCache.get('home/index.html');
        $scope = $rootScope.$new();
        template = $($compile(templateHtml)($scope));
        $scope.$digest();
    }));

    it('should contains form', function () {
        var newExpenseDiv = template.find('#new-expense');
        expect(newExpenseDiv.get(0)).not.toBe(undefined);

        var newExpenseFrom = newExpenseDiv.find('form');
        expect(newExpenseFrom.get(0)).not.toBe(undefined);

        expect(newExpenseFrom.find('input[ng-model="expense.value"]').get(0)).not.toBe(undefined);
        expect(newExpenseFrom.find('input[ng-model="expense.date"]').get(0)).not.toBe(undefined);
        expect(newExpenseFrom.find('input[ng-model="expense.category"]').get(0)).not.toBe(undefined);
    });
});