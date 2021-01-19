import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const FilmItem = (props) => {
    const {film} = props;
    return(
        <View style={styles.main_container}>
            <View style={styles.main_information_container}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${film.poster_path}`}} style={styles.image} />
                <View style={styles.content_container}>
                    <View>
                        <Text style={styles.title_text}>{film.title}</Text>
                    </View>
                    <View>
                        <Text>{film.release_date}</Text>
                    </View>
                </View>
                {film.vote_average > 7 && <View style={{justifyContent: 'center'}}>
                    <Image source={require('../../assets/images/star.png')} style={{width: 30, height: 30}} />
                </View>}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    content_container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
    },
    main_information_container: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 120,
        margin: 5,
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    picto: {
        width: 30,
        height: 30,
    }
})
