import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {MainBottomNavigator} from "./src/navigations/MainBottomNavigator";

export default function App() {
  return (
      <NavigationContainer>
          <MainBottomNavigator />
      </NavigationContainer>
  );
}
