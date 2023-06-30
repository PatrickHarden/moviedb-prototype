import styles from '../styles/Home.module.css'
import { SimpleGrid, Tooltip, Fade } from '@chakra-ui/react'
import Link from 'next/link'
import { fetchMovies } from '../api/api'
import config from '../utils/config'
import MovieCard from '../components/movieCard'

export default function Popular({ movies }) {
    return (
        <div className={styles.container}>
            <SimpleGrid columns={6} spacing={4}>
                {movies.map(({ id, poster_path, original_title }, index) => (
                    <Link href={'/movie/' + id} key={String(id) + index}>
                        <Tooltip label={original_title} openDelay={1000}>
                            <Fade in>
                                <MovieCard poster_path={poster_path} original_title={original_title} />
                            </Fade>
                        </Tooltip>
                    </Link>
                ))}
            </SimpleGrid>
        </div>
    )
}

export async function getStaticProps() {
    const movies = await fetchMovies(config.API_POPULAR_MOVIES)

    return {
        props: {
            movies
        },
    }
}