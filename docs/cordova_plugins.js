cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-indexeddb-async/www/indexeddbshim.min.js",
        "id": "cordova-plugin-indexeddb-async.IndexedDBShim",
        "pluginId": "cordova-plugin-indexeddb-async",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-indexeddb-async": "0.0.1",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});