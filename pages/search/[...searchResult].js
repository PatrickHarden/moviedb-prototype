import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import MovieDetails from '../../components/movieDetails';

export default function SearchResult() {
    const [movie, setMovie] = useState(null)
    const router = useRouter()
    const movieId = (typeof window === 'undefined') ? 0 : router.query.searchResult[0]

    // fetch movie details
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=848268110adb03febf792902eac10bc7`)
            const response = await res.json()
            setMovie(response)
        }
        fetchMovieDetails();
    }, [])

    return (
        <div className={styles.container}>
            {movie &&
                <MovieDetails movie={movie} />
            }
        </div>
    )
}