// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E-Census Handbook',
  tagline: 'Documentation for E-Census Handbook',
  favicon: 'img/uneca1.ico',

  // Set the production url of your site here
  url: 'https://eca-census-handbook.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/eca-census-handbook/',   // GitHub pages
  baseUrl: '/',  // Netlify 


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YonSci', // Usually your GitHub org/user name.
  projectName: 'eca-census-handbook', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub pages will deploy from.

  onBrokenLinks: 'warn', // warn or throw 
  onBrokenMarkdownLinks: 'warn',

  scripts: [
        {
            src: "https://app.qanswer.ai/integration/widget.js",
            async: true,
            'data-name': "QA AI Assistant",
            'data-owner': "Yonas M.",
            'data-type': "text",
            'data-frontend': "https://app.qanswer.ai/",
        },
    ],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      fr: {
        label: 'Français',
      },
    },
  },

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "fr"], // Supports your English and French locales
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right',
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/YonSci/eca-census-handbook/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/uneca2.png',
      navbar: {
        // title: 'E-Census Handbook', // Commented out or remove
        // logo: { // Commented out or remove
        //   alt: 'My Site LogE-Census Handbook Logo',
        //   src: 'img/uneca1.png',
        // },
        
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'census, digital census, Africa, E-Census Handbook, UNECA, UNFPA, ONS-UK' },
        { property: 'og:title', content: 'E-Census Handbook' },
        { property: 'og:description', content: 'Digital Population and Housing Census Handbook for Africa' },
        { property: 'og:image', content: 'https://yonsci.github.io/eca-census-handbook/img/android-chrome.png' },
        { property: 'og:url', content: 'https://yonsci.github.io/eca-census-handbook' },
      ],
      
      // Scripts removed - Algolia search now loaded directly in CustomHeader component
      
      customCss: [require.resolve('./src/css/custom.css')],


    }),
};

export default config;
