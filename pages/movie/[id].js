import styles from '../../styles/Home.module.css';
import { fetchMovies } from '../../api/api';
import config from '../../utils/config';
import MovieDetails from '../../components/movieDetails';

export default function Movie({ movie }) {

    return (
        <div className={styles.container}>
            <MovieDetails movie={movie} />
        </div>
    )
}

export async function getStaticPaths() {
    const allMovies = await fetchMovies(config.API_ALL_MOVIES)
    const nowPlayingMovies = await fetchMovies(config.API_NOW_PLAYING)
    const topRatedMovies = await fetchMovies(config.API_TOP_RATED)
    const popularMovies = await fetchMovies(config.API_POPULAR_MOVIES)

    const movies = [...allMovies, ...nowPlayingMovies, ...topRatedMovies, ...popularMovies];
    
    const paths = movies.map((result) => ({
        params: { id: String(result.id) },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=848268110adb03febf792902eac10bc7`)
    const movie = await res.json()

    return { props: { movie } }
}