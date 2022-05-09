package com.example.myapplication2;

import com.facebook.react.ReactActivity;


public class ReactNativeActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        try {
            return "MyReactNativeApp";
        } catch (Error error) {
            return Constants.DEFAULT_APP_NAME;
        }
    }
}
