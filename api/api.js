import config from "../utils/config"
import { delay } from "../utils/delay";

export const fetchMovies = async (api) => {
    let movies = [];
    // I was going to pull all of the movies initally based on the results total_pages variable, but it says that the page parameter must be less than or equal to 500:
    // https://api.themoviedb.org/3/discover/movie?api_key=848268110adb03febf792902eac10bc7&page=501
    await Promise.all(Array.apply(null, Array(config.PAGE_LOOP_AMOUNT - 1)).map(async (x, i) => {
        const response1 = await fetch(api + '&page=' + (i + 1));
        const data1 = await response1.json();
        // delay necessary so that the movie api doesn't return a 403 error
        await delay(50);
        if (data1.results) {
            // reduce the response to minmize the json payload
            return movies.push(...data1.results.map((result) => (
                {
                    poster_path: result.poster_path,
                    id: result.id,
                    original_title: result.original_title
                }
            )));
        } else {
            return null
        }
    }));
    return movies;
}

export const searchMovies = async (searchTerm) => {
    const response = await fetch(config.API_SEARCH + searchTerm);
    const data = await response.json();
    return data;
}