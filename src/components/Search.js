import React from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";
import data from '../helpers/filmDatas';

export const Search = (props) => {
    const onChangeText = (text) => {
        props.handleSearch(text);
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <Image source={require('../../assets/images/loupe.jpg')} style={styles.picto}/>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={onChangeText}
                />
            </View>
            <Button title='Rechercher' onPress={() => props.handleClickButton(data)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        padding: 30,
        backgroundColor: '#fd4556',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        height: 50,
        paddingLeft: 10
    }
})
