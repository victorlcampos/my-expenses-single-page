describe('users new.html', function () {
    var  template, scope, filter;
    beforeEach(module('templates'));

    beforeEach(inject(function($templateCache, $rootScope, $compile, $filter) {
        var templateHtml = $templateCache.get('users/new.html');
        $scope = $rootScope.$new();

        $scope.new = function() {

        };

        template = $($compile(templateHtml)($scope));
        $scope.$digest();

        scope  = $scope;
        filter = $filter;
    }));

    describe('user form', function() {
        it('should contains form', function() {
            var form = template.find('form');
            expect(form.get(0)).not.toBe(undefined);

            var name = form.find('input[ng-model="user.name"]');
            expect(name.get(0)).not.toBe(undefined);

            var email = form.find('input[ng-model="user.email"]');
            expect(email.get(0)).not.toBe(undefined);

            var password = form.find('input[ng-model="user.password"]');
            expect(password.get(0)).not.toBe(undefined);
        });

        it('click submit should call save function', function() {
            var form = template.find('form');
            expect(form.get(0)).not.toBe(undefined);

            var submit         = form.find('button');
            expect(submit.get(0)).not.toBe(undefined);

            scope.user = {
                created: false
            }

            scope.create = function(expense) {
                scope.user.created = true;
            };

            submit.click();
            expect(scope.user.created).toBe(true);
        });
    });
});