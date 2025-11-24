import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './StackNavigation1';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={{//Versiones anteriores tabBarOptions
                tabBarActiveTintColor: "#ff6600",//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowIcon: true,//showIcon
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: {//labelStyle
                    fontSize: 11
                },
                tabBarStyle: {//style
                    paddingTop: Constants.statusBarHeight,
                    backgroundColor: "#f3f3f1"
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons  name="home" size={20} color={color} />
                    )
                }}

            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Configuración",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="settings" size={24} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel: "Acerca de",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons  name="question-answer" size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}