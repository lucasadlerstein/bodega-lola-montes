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
                {/* <meta name="robots" content="index, follow" /> */}
                {/* <link rel="shortcut icon" href="/img/logos/favicon.ico" type="image/x-icon" /> */}
                {/* <link rel="icon" href="/img/logos/favicon.ico" type="image/x-icon" /> */}
                {/* <meta property="og:title" content="LATAM Hospitals 2020 - Evento Virtual de Salud" /> */}
                {/* <meta property="og:description" content="Encuentro interdisciplinario entre grandes profesionales y empresas. 23/11 al 2/12." /> */}
                {/* <meta property="og:image" content="\img\Latam_Hospitals_2020_Share.jpg" /> */}
                {/* <meta property="og:url" content="https://latamhospitals.com" /> */}
                {/* <meta property="og:site_name" content="LATAM HOSPITALS 2020" /> */}

                <link
                    rel="preload"
                    href="/fonts/Gotham/GothamMedium.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Gotham/GothamUltra.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Gotham/GothamBook.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Gotham/Gotham-Bold.otf"
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