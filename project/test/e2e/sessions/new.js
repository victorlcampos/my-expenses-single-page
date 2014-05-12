'use strict';

describe('sessions new view', function() {

  var ptor;
  beforeEach(function () {
    browser.get('/sessions/new');
    ptor = protractor.getInstance();
  });
});