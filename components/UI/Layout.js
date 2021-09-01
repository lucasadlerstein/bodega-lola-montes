import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from "next/head";
import Link from "next/link";


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="robots" content="index, follow" />
                {/* <meta property="og:title" content="" /> */}
                {/* <meta property="og:description" content="" /> */}
                {/* <meta property="og:image" content="" /> */}
                {/* <meta property="og:url" content="" /> */}
                {/* <meta property="og:site_name" content="" /> */}
                <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                <link rel="icon" href="images/favicon.ico" type="image/x-icon"/>


                <link
                    rel="preload"
                    href="fonts/Gotham/GothamMedium.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="fonts/Gotham/GothamUltra.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="fonts/Gotham/GothamBook.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="fonts/Gotham/Gotham-Bold.otf"
                    as="font"
                    crossOrigin=""
                />


            </Head>
            <Header />
                {children}
            <Footer />
        </>
    );
}
 
export default Layout;