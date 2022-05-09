package com.example.myapplication2;

import android.os.Bundle;

import com.facebook.react.ReactFragment;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.widget.Button;

import androidx.fragment.app.Fragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.example.myapplication2.databinding.ActivityHybridBinding;

public class HybridActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

    private AppBarConfiguration appBarConfiguration;
    private ActivityHybridBinding binding;

    public HybridActivity() {
    }

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hybrid);
        Fragment reactNativeFragment = new ReactFragment.Builder()
                .setComponentName("Component1")
                .build();

        Fragment reactNativeFragment2 = new ReactFragment.Builder()
                .setComponentName("MyReactNativeApp")
                .build();

        getSupportFragmentManager()
                .beginTransaction()
                .add(R.id.reactNativeFragment, reactNativeFragment)
                .add(R.id.reactNativeFragment2, reactNativeFragment2)
                .commit();


    }


    @Override
    public void invokeDefaultOnBackPressed() {

    }
}