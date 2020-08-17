export default function fetchCoctail(query) {

    const fullApiUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=' + query;

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(results => {
            return results.drinks;
        })
}
export function fetchCoctailRandom() {

    const fullApiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(results => {
            return results.drinks;
        })
}
