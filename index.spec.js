var assert = require('assert');
var garmin = require('./index.js');
describe('Garmin', function() {
  describe('Parsin Url', function() {
    it('should detect activityId correctly and return the right html', function() {
    	const expected = '<div class="garmin-wrapper"><iframe src=\'https://connect.garmin.com/modern/activity/embed/myTest123\' width=\'465\' height=\'500\' frameborder=\'0\'></iframe>';
      assert.equal(expected, garmin.garmin(['https://connect.garmin.com/modern/activity/myTest123']));
    });
  });
});