import {getApiUrl} from "./api";

export function searchMovie(searchText, page) {
    return fetch(
        getApiUrl(
            `/search/movie`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}

export function getMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}

export function getTopRated() {
    return fetch(
        getApiUrl(
            `/movie/top_rated`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json())
}

export function getLatest() {
    return fetch(
        getApiUrl(
            '/movie/latest',
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json())
}
