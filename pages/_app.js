// import React from 'react';
// import App from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
import '../styles/globals.css';

import { appWithTranslation } from '../i18n'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);