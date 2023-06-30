import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
import { searchMovies } from '../api/api'
import { SimpleGrid, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import MovieCard from '../components/movieCard'

export default function Search({ searchTerm }) {
    const [movies, setMovies] = useState([])

    const fetchResults = async () => {
        const response = await searchMovies(searchTerm)
        setMovies(response.results)
    }

    useEffect(() => {
        fetchResults();
    }, [searchTerm])

    return (
        <div className={styles.container}>
            <SimpleGrid columns={6} spacing={4}>
                {movies.map(({ id, poster_path, original_title }, index) => (
                    <Link href={'/search/' + id} key={String(id) + index}>
                        <Tooltip label={original_title} openDelay={1000}>
                            <div style={{ height: '100%' }}>
                                <MovieCard poster_path={poster_path} original_title={original_title} />
                            </div>
                        </Tooltip>
                    </Link>
                ))}
            </SimpleGrid>
        </div>
    )
}