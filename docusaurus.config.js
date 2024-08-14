import {themes as prismThemes} from 'prism-react-renderer';

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'fpm-py',
  tagline: 'The Fourier ptychography library for python',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rspcunningham.github.io/',
  baseUrl: '/fpm-py-docs/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rspcunningham', // Usually your GitHub org/user name.
  projectName: 'rspcunningham.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'fpm-py',
        logo: {
          alt: 'fpm-py',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Get Started',
          },
          {
            type: 'doc',
            docId: 'guide/how-to-use',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'doc',
            docId: 'reference/intro',
            position: 'left',
            label: 'API Reference',
          },
          {
            href: 'https://parasight.ca',
            label: 'ParaSight',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} ParaSight Imaging Systems Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
