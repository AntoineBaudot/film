import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const FilmItem = (props) => {
    const {film} = props;
    return(
        <View style={styles.main_container}>
            <Image source={{uri: 'image'}} style={styles.image} />
            <View style={styles.content_container}>
                <View>
                    <Text style={styles.title_text}>{film.title}</Text>
                </View>
                <View>
                    <Text>{film.release_date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row'
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 90,
        backgroundColor: 'grey',
        margin: 5,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5
    },
})
