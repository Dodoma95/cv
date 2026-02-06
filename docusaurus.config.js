// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Dorian Maillard',
    tagline: 'Développeur Fullstack Java / Spring Boot - ReactJS',
    favicon: 'img/favicon.ico',

    // GitHub Pages
    url: 'https://Dodoma95.github.io',
    baseUrl: '/cv/',

    organizationName: 'Dodoma95',
    projectName: 'cv',

    onBrokenLinks: 'throw',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        }
    },

    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
        localeConfigs: {
            fr: {
                label: 'FR',
            },
            en: {
                label: 'EN',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: false,
                pages: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'Dorian Maillard',
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/Dodoma95/cv',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Contact',
                        items: [
                            {
                                label: 'Email',
                                href: 'mailto:dorian.maillard60@gmail.com',
                            },
                            {
                                label: 'Phone',
                                href: 'tel:+33625521689',
                            },
                        ],
                    },
                    {
                        title: 'Profiles',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Dodoma95/cv',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/dorian-maillard/',
                            }
                        ],
                    },
                    {
                        title: 'Resume',
                        items: [
                            {
                                label: 'Download PDF',
                                href: '#', // placer le PDF dans static/files, ex : /files/DorianMaillard_CV.pdf
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Dorian MAILLARD. All rights reserved.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
