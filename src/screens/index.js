import { createSwitchNavigator, createAppContainer }from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';

const AuthNavigator = createStackNavigator(
    {
        Login: LoginScreen  
    }, 
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);


const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen
});

const MainNavigator = createStackNavigator({
    Tab: TabNavigator
});

const AppNavigator = createSwitchNavigator(
    {
        Splash: SplashScreen,
        Auth: AuthNavigator,
        Main: MainNavigator
    },
    {
        initialRouteName: 'Splash'
    } 
);

const Navigation  = createAppContainer(AppNavigator);

export default Navigation

