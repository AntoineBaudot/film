import React, {useLayoutEffect} from 'react';
import {Text, View, SafeAreaView} from "react-native";

export const DetailScreen = (props) => {
    const {route, navigation} = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title
        })
    })

    return (
        <SafeAreaView>
            <View>
                <Text>Une vue détail</Text>
            </View>
        </SafeAreaView>

    )
}
