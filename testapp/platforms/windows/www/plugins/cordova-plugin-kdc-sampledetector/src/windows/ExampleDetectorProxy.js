cordova.define("cordova-plugin-kdc-sampledetector.ExampleDetectorProxy", function(require, exports, module) {
module.exports = {
    getPlatform: function(successCallback) {
        successCallback(ExampleDetectorPlugin.ExampleDetector.getPlatform());
    }
}

require("cordova/exec/proxy").add("ExampleDetector", module.exports);
});
