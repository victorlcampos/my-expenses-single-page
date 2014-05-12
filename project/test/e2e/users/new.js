'use strict';

describe('users new view', function() {
  var ptor;
  beforeEach(function () {
    browser.get('/users/new');
    ptor = protractor.getInstance();
  });

  it('should show user form', function() {
    expect(browser.getLocationAbsUrl()).toMatch(browser.baseUrl+"users/new");
    expect(ptor.isElementPresent(by.css('form'))).toBe(true);
  })
});