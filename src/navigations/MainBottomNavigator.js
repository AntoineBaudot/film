import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./MainNavigator";
import {TopRatedScreen} from "../screens/TopRatedScreen";

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator>
            <TabNavigator.Screen name="Search" component={SearchAndDetailNavigator} />
            <TabNavigator.Screen name="TopRated" component={TopRatedScreen} />
        </TabNavigator.Navigator>
    )
}
