const BASE_API_URL = 'https://thecocktaildb.com/api/json/v1/1/';

export function fetchCoctail(query) {

    // TODO: convert into string template
    const fullApiUrl = BASE_API_URL + 'search.php?s=' + query;

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(results => {
            return results.drinks;
        })
}

export function fetchCoctailRandom() {

    // TODO: convert into string template
    const fullApiUrl = BASE_API_URL + 'random.php';

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(results => {
            return results.drinks;
        })
}
