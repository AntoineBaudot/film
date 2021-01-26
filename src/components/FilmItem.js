import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions} from 'react-native';

export const FilmItem = (props) => {
    const {film, goToDetail, screenName, index} = props;
    let positionLeft = new Animated.Value(index % 2 === 0 ? Dimensions.get('window').width : -Dimensions.get('window').width);
    useEffect(() => {
        Animated.spring(
            positionLeft,
            {
                toValue: 0,
                speed: 4,
                bounciness: 30
            }
        ).start()
    }, [])
    return(
        <Animated.View style={{left: positionLeft}}>
            <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
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
                    {screenName !== 'TopRated' && film.vote_average > 7 && <View style={{justifyContent: 'center', marginRight: 10}}>
                        <Image source={require('../../assets/images/star.png')} style={{width: 30, height: 30}} />
                    </View>}
                    {screenName === 'TopRated' && <View style={{justifyContent: 'center', marginRight: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{film.vote_average}</Text>
                    </View>}

                </View>
            </TouchableOpacity>
        </Animated.View>

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
