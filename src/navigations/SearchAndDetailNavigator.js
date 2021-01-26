import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SearchScreen from "../screens/SearchScreen";
import {DetailScreen} from "../screens/DetailScreen";


const Stack = createStackNavigator()

export const SearchAndDetailNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
    )
}
