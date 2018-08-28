var exec = require('cordova/exec');

exports.getPlatform = function(callbackFn) {
	exec(callbackFn, function() {}, 'ExampleDetector', 'getPlatform', [] );
}
