describe('Home index.html', function () {
    var  template, scope, filter;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile, $filter) {
        var templateHtml = $templateCache.get('expenses/index.html');
        $scope = $rootScope.$new();

        $scope.categories = [
            {label:"Basic", color:"#3366CC", value:100},
            {label:"Plus" , color:"#DC3912", value:200},
            {label:"Lite" , color:"#FF9900", value:300},
            {label:"Elite", color:"#109618", value:400},
            {label:"Delux", color:"#990099", value:500}
        ];

        $scope.expense = {
            date : $filter("date")(Date.now(), 'yyyy-MM-dd')
        };

        template = $($compile(templateHtml)($scope));
        $scope.$digest();

        scope  = $scope;
        filter = $filter;
    }));

    describe('newExpenseFrom', function() {

        it('should contains form', function () {
            var newExpenseDiv = template.find('#new-expense');
            expect(newExpenseDiv.get(0)).not.toBe(undefined);

            var newExpenseFrom = newExpenseDiv.find('form');
            expect(newExpenseFrom.get(0)).not.toBe(undefined);

            var value = newExpenseFrom.find('input[ng-model="expense.value"]');
            expect(value.get(0)).not.toBe(undefined);

            var date = newExpenseFrom.find('input[ng-model="expense.date"]');
            expect(date.get(0)).not.toBe(undefined);

            var category = newExpenseFrom.find('input[ng-model="expense.category"][list="categories"]');
            expect(category.get(0)).not.toBe(undefined);

            var datalist = newExpenseFrom.find('#categories');
            expect(datalist.get(0)).not.toBe(undefined);

            scope.categories.forEach(function(category) {
                expect(datalist.find('option[value="'+category.label+'"]').get(0)).not.toBe(undefined);
            });
        });

        it('click submit should call save function', function() {
            var newExpenseDiv = template.find('#new-expense');
            var newExpenseFrom = newExpenseDiv.find('form');

            var submit         = newExpenseFrom.find('button');
            expect(submit.get(0)).not.toBe(undefined);

            scope.expense = {
                value: 100
            }

            scope.save = function(expense) {
                scope.value = expense.value;
            };

            submit.click();
            expect(scope.value).toBe(100);
        });
    });
});