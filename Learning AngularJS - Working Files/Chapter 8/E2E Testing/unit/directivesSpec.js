'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('append-my-class', function() {
    it('should add class passed in as an attribute', function() {
      inject(function($compile, $rootScope) {
        var element = $compile('<span append-my-class newclass="panel"></span>')($rootScope);
        expect(element.hasClass("panel")).toBe(true)
      })
    })
  })
});
