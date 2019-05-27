/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import icons from './CustomIcon';

import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import MusicDetailScreen from './screen/MusicDetailScreen';
import SettingScreen from './screen/SettingsScreen';
import AnimateExample from './screen/AnimateExample'


import {
    createBottomTabNavigator,
    createAppContainer,
} from "react-navigation";

const platform = Platform.select({
    ios: 'ios',
    android: 'android'
});

const iconNameSet = {
    Home: "ic_home_default",
    HomeActive: "ic_home_selected",
    Detail: "ic_search_default",
    DetailActive: "ic_search_default",
    MusicDetail: "ic_noti_default",
    MusicDetailActive: "ic_noti_selected",
    Settings: "ic_my_default",
    SettingsActive: "ic_my_selected",
}

export default createAppContainer(createBottomTabNavigator(
    {
        Home: HomeScreen,
        Detail: AnimateExample,
        MusicDetail: MusicDetailScreen,
        Settings: SettingScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = icons;
                let iconName;
                if (routeName === 'Home') {
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    iconName = `${focused ? iconNameSet.HomeActive : iconNameSet.Home}`;
                } else if (routeName === 'Detail') {
                    iconName = `${focused ? iconNameSet.DetailActive : iconNameSet.Detail}`;
                } else if (routeName === 'MusicDetail') {
                    iconName = `${focused ? iconNameSet.MusicDetailActive : iconNameSet.MusicDetail}`;
                } else if (routeName === 'Settings') {
                    iconName = `${focused ? iconNameSet.SettingsActive : iconNameSet.Settings}`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={34} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            style: StyleSheet.flatten({backgroundColor: "black"}) ,
            showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: 'white',
        },
    },
));