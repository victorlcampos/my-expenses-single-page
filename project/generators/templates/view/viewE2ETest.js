'use strict';

describe('<%= controllerName %> <%= name %> view', function() {

  var ptor;
  beforeEach(function () {
    browser.get('/<%= controllerName %>/<%= name %>');
    ptor = protractor.getInstance();
  });
});