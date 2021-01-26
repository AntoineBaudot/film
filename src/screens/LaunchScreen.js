import React from 'react';
import {View, StyleSheet, Button} from "react-native";

export const LaunchScreen = (props) => {
    const {navigation} = props;
    const handlePressButton = (type) => {
        type === 'search' ?
            navigation.navigate('Recherche', {screen: 'Search'}) :
            navigation.navigate('Latest')
    }
    return (
        <View style={styles.main_container}>
            <Button onPress={() => handlePressButton('search')} title="Recherche..." />
            <Button onPress={() => handlePressButton('latest')} title="Dernier film" />
        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 50,
        justifyContent: 'space-around'
    }
})
