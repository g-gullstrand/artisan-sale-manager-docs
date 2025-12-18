// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artisan Sale Manager',
  tagline: 'Professional WooCommerce Sale Management Made Simple',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // TODO: Replace with your custom domain once purchased
  url: 'https://docs.artisansalemanager.com', // Your docs subdomain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domains, this should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // TODO: Replace 'g-gullstrand' with your actual GitHub username
  organizationName: 'g-gullstrand', // Your GitHub username
  projectName: 'artisan-sale-manager', // Your repo name

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
          editUrl:
            'https://github.com/g-gullstrand/artisan-sale-manager/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/g-gullstrand/artisan-sale-manager/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/artisan-sale-manager-social-card.jpg',
      navbar: {
        title: 'Artisan Sale Manager',
        logo: {
          alt: 'Artisan Sale Manager Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/pricing', label: 'Pricing', position: 'left'},
          {
            // TODO: Replace 'g-gullstrand' with your actual GitHub username
            href: 'https://github.com/g-gullstrand/artisan-sale-manager',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Features',
                to: '/docs/features',
              },
              {
                label: 'API Reference',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WordPress.org',
                href: 'https://wordpress.org/plugins/artisan-sale-manager/',
              },
              {
                label: 'Support Forum',
                href: 'https://wordpress.org/support/plugin/artisan-sale-manager/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                // TODO: Replace 'g-gullstrand' with your actual GitHub username
                href: 'https://github.com/g-gullstrand/artisan-sale-manager',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Artisan Sale Manager. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
