'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('myApp.filters'));

  describe('appendStuff', function() {
    it('should append a supplied string at the end', inject(function(appendStuffFilter) {
      expect(appendStuffFilter('basestr','newstr')).toEqual('basestrnewstr')
    }))
  })
});
