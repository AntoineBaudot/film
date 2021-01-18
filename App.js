import React from 'react';
import SearchScreen from "./src/screens/SearchScreen";
import {View} from "react-native";

export default function App() {
  return (
      <View style={{flex: 1, marginTop: 30}}>
        <SearchScreen />
      </View>

  );
}
