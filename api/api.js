import config from "../utils/config"
import { delay } from "../utils/delay";

const { PAGE_LOOP_AMOUNT, API_SEARCH } = config;

export const fetchMovies = async (api) => {
    let movies = [];
    // I was going to pull all of the movies initally based on the results total_pages variable, but it says that the page parameter must be less than or equal to 500:
    // https://api.themoviedb.org/3/discover/movie?api_key=848268110adb03febf792902eac10bc7&page=501
    await Promise.all(
        Array.from({ length: PAGE_LOOP_AMOUNT - 1 }).map(async (_, i) => {
          const response = await fetch(`${api}&page=${i + 1}`);
          const data = await response.json();
          await delay(50);
    
          if (data.results) {
            movies.push(
              ...data.results.map((result) => ({
                poster_path: result.poster_path,
                id: result.id,
                original_title: result.original_title,
              }))
            );
          }
        })
      );
    return movies;
}

export const searchMovies = async (searchTerm) => {
    const response = await fetch(`${API_SEARCH}${searchTerm}`);
    const data = await response.json();
    return data;
}