import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {LaunchNavigator} from "./src/navigations/LaunchNavigator";

export default function App() {
  return (
      <NavigationContainer>
          <LaunchNavigator />
      </NavigationContainer>
  );
}
