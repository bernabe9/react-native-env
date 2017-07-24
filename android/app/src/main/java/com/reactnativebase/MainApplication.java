package com.reactnativebase;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;

import java.util.List;
import java.util.Arrays;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
            new ReactNativeConfigPackage()
        );
    }
}
