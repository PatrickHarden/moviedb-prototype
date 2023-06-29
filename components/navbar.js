import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { SearchBar } from './searchBar';
import { Fade } from '@chakra-ui/react';

export default function NavBar({ setSearchTerm }) {
    return (
        <Fade in>
            <div className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <Link href="/"><img width="40" height="40" src="https://img.icons8.com/ios/50/333333/home--v1.png" alt="home--v1" /></Link>
                    <SearchBar setSearchTerm={setSearchTerm} />
                    <Link href="/now_playing">Now Playing</Link>
                    <Link href="/top_rated">Top Rated</Link>
                    <Link href="/popular">Popular</Link>
                </div>
            </div>
        </Fade>
    )
}