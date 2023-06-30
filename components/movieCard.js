import { Card, CardBody, CardHeader, Image, Heading } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function MovieCard({ poster_path, original_title }) {
    return (
        <Card maxW="sm" padding={0} height='100%' justifyContent='center'>
            {poster_path ?
                <CardBody padding={0}>
                    <Image
                        src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2' + poster_path}
                        alt={original_title}
                        borderRadius='lg'
                        loading='lazy'
                        className={styles.cardImage}
                    />
                </CardBody> :
                <CardHeader>
                    <Heading size='md' textAlign='center'>{original_title}</Heading>
                </CardHeader>
            }
        </Card>
    )
}