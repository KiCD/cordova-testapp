cordova.define("cordova-plugin-kdc-sampledetector.ExampleDetector", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getPlatform = function(callbackFn) {
	exec(callbackFn, function() {}, 'ExampleDetector', 'getPlatform', [] );
}

});
