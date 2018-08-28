cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-kdc-sampledetector.ExampleDetector",
        "file": "plugins/cordova-plugin-kdc-sampledetector/www/ExampleDetector.js",
        "pluginId": "cordova-plugin-kdc-sampledetector",
        "clobbers": [
            "ExampleDetector"
        ]
    },
    {
        "id": "cordova-plugin-kdc-sampledetector.ExampleDetectorProxy",
        "file": "plugins/cordova-plugin-kdc-sampledetector/src/windows/ExampleDetectorProxy.js",
        "pluginId": "cordova-plugin-kdc-sampledetector",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-kdc-sampledetector": "1.0.0"
};
// BOTTOM OF METADATA
});