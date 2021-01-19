import { API_KEY, API_URL} from "../constants/api";

function getQueryString(queryParams) {
    // const obj = {param1: "value1", param2: 12}
    let queryString;
    if (typeof queryParams === 'object') {
        //?param1=value1&param2=12 etc...
        queryString = Object.entries(queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&')
    }
    // Ternaire : condition ? valeurVrai : valeurFausse
    if (queryString) {
        return `?${queryString}`
    }

    return ''
}

function getUrl(path, queryParams) {
    return `${path}${getQueryString(queryParams)}`;
}

// 1. Endpoint api : /search/movie // 2. api_key & query => /search/movie?api_key=CLE_API&query=LA_RECHERCHE

export function getApiUrl(path, queryParams = {}) {
    return getUrl(
        `${API_URL}${path}`,
        {...queryParams, api_key: API_KEY}
    )
}
