'use strict';

describe('expense index view', function() {

  var ptor;
  beforeEach(function () {
    browser.get('/');
    ptor = protractor.getInstance();
  });

  it('should show donut chart', function() {
    expect(browser.getLocationAbsUrl()).toMatch(browser.baseUrl+"expenses");
    expect(ptor.isElementPresent(by.css('#donut'))).toBe(true);
  });
});