'use client'

import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import createCache from '@emotion/cache';
import '../styles/globals.css'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

const NavBar = dynamic(() => import('../components/navbar'), {
  ssr: false,
})

const emotionCache = createCache({
  key: 'css',
  prepend: true,
});

function MyApp({ Component, pageProps }) {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider>
                <div className={styles.placeholderNavbar} />
                <NavBar setSearchTerm={setSearchTerm} />
                <Component {...pageProps} searchTerm={searchTerm} />
            </ChakraProvider>
        </CacheProvider>
    )
}

export default MyApp;