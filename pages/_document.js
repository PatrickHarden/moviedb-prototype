'use client'

import * as React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import createCache from '@emotion/cache';

const emotionCache = createCache({
    key: "css",
    prepend: true,
});

const { extractCritical } = createEmotionServer(emotionCache);


export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = extractCritical(initialProps.html);
        return {
            ...initialProps,
            styles: [
                initialProps.styles,
                <style
                    key="emotion-css"
                    dangerouslySetInnerHTML={{ __html: styles.css }}
                    data-emotion-css={styles.ids.join(" ")}
                />,
            ],
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
                </Head>
                <body>
                    <CacheProvider value={emotionCache}>
                        <ChakraProvider>
                            <ColorModeScript />
                            <Main />
                            <NextScript />
                        </ChakraProvider>
                    </CacheProvider>
                </body>
            </Html>
        );
    }
}