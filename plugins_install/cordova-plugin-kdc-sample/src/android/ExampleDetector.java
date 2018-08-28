package ro.kdc.cordovaplugins;

import android.content.Context;
import android.content.res.Configuration;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;


public class ExampleDetector extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("getPlatform")) {
            return this.getPlatform(args, callbackContext);
        }
        return false;
    }

    private String getPlatform(JSONArray fields, final CallbackContext callbackContext) {
        callbackContext.success();
        return "android";
    }
}