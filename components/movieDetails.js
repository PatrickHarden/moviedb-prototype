import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import { SimpleGrid, Box } from '@chakra-ui/react';

export default function MovieDetails({ movie }) {
    return (
        <div className={styles.detailsContainer}>
            <Heading size={'lg'} color='#333' textAlign='center'>{movie.original_title}</Heading>
            <Text textAlign='center'>{movie.tagline}</Text>
            <br />
            <SimpleGrid columns={2} spacing={0}>
                <Box>
                    {movie.poster_path ?
                        <Image
                            src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + movie.poster_path}
                            alt='post.poster_path'
                            borderRadius='lg'
                            loading='eager'
                        /> : null
                    }
                </Box>
                <Box>
                    {movie.overview &&
                        <>
                            <Text fontWeight='bold'>Overview</Text>
                            <Text>{movie.overview}</Text>
                            <br />
                        </>
                    }
                    <Text>Genres: {movie.genres.map((genre) => (<span style={{ marginRight: '5px' }}>{genre.name}</span>))}</Text>
                    <Text>Release Date: {movie.release_date}</Text>
                    <Text>Runtime: {movie.runtime}min</Text>
                    <Text>Budget: ${movie.budget}</Text>
                    <Text>Language: {movie.original_language}</Text>
                </Box>
            </SimpleGrid>
        </div>
    )
}