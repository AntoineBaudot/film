import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList} from "react-native";
import {Search} from "../components/Search";
import {ResultSearch} from "../components/ResultSearch";
import {FilmItem} from "../components/FilmItem";

export default class SearchScreen extends React.Component {
    state = {
        searchText: '',
        filmsState: [],
    }

    handleSearchText = (text) => {
        console.warn('Debug : ', text)
        this.setState({searchText: text})
    }

    _loadFilms = (items) => {
        this.setState({filmsState: items})
    }

    _renderResult = () => {
        if (this.state.filmsState.length > 0) {
            return <View>
                <FlatList
                    data={this.state.filmsState}
                    renderItem={({item}) => <FilmItem film={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        }

        return <View style={styles.no_found_container}><Text style={styles.text_no_result}>Aucun film n'a été chargé.</Text></View>
    }

    render() {
        const {searchText} = this.state;
        return (
            <SafeAreaView style={styles.main_container}>
                <Search handleSearch={this.handleSearchText} handleClickButton={this._loadFilms}/>
                {this.state.searchText !== '' ? <ResultSearch textSearched={searchText}/> : null}
                    {this._renderResult()}

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    result_container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    text_no_result: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    no_found_container: {
        flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
