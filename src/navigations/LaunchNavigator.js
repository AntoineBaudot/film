import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {LaunchScreen} from "../screens/LaunchScreen";
import {MainBottomNavigator} from "./MainBottomNavigator";
import {DetailScreen} from "../screens/DetailScreen";

const Stack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={LaunchScreen} options={{headerShown: false}} />
            <Stack.Screen name="Recherche" component={MainBottomNavigator} />
            <Stack.Screen name="Latest" component={DetailScreen} />
        </Stack.Navigator>
    )
}
