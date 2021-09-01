const path = require('path');
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    en: 'en'
}

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
      },
    shallowRender: true,
    // reactStrictMode: false,
    // reactStrictMode: true,
    // trailingSlash: true,
    // assetPrefix: './',
    env: {
        frontendURL: 'http://localhost:3000',
    } 
}