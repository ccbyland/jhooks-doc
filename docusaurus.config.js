const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { plugins } = require('./docusaurus-jhooks-confis');

module.exports = {
    title: 'JHooks', // 网站标题
    url: 'http://doc.jd.com', // 网站网址
    baseUrl: '/jhooks/index/', // 站点的相对路径
    favicon: 'favicon.ico', // 网站图标路径
    tagline: 'JX React Hooks', // 网站标语
    onBrokenLinks: 'throw', // Docusaurus 在检测到无效链接时的行为
    onBrokenMarkdownLinks: 'warn', // Docusaurus 在检测到无效 Markdown 链接时的行为
    projectName: 'docusaurus', // GitHub 源的名称

    // 预设
    presets: [
        [
            '@docusaurus/preset-classic',
            // {
            //     docs: {
            //         sidebarPath: require.resolve('./sidebars.js'),
            //     },
            // },
            {
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: plugins,

    themeConfig: {
        navbar: {
            title: 'JHooks',
            logo: {
                alt: 'JHooks',
                src: 'https://img30.360buyimg.com/img/jfs/t1/6841/19/20305/989/61dbd10bE39ced8ea/3b350fd83365d5f8.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     docId: 'guide',
                //     label: 'Guide',
                //     position: 'right',
                // },
                // {
                //     type: 'doc',
                //     docId: 'hooks',
                //     label: 'Hooks',
                //     position: 'right',
                // }
                {
                    to: 'docs/guide/intro',
                    position: 'right',
                    label: 'Guide',
                },
                {
                    to: 'docs/BaseHooks/useAsyncEffect',
                    position: 'right',
                    label: 'Hooks',
                },
                {
                    href: 'https://coding.jd.com/JHooks/jhooks/releases/',
                    label: 'Releases',
                    position: 'right',
                },
                {
                    href: 'https://coding.jd.com/JHooks/jhooks/',
                    label: 'Coding',
                    position: 'right',
                },
                {
                    href: 'http://npm.m.jd.com/browse/keyword/@jhooks',
                    label: 'JNPM',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} 京喜事业群 JHooks委员会`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
};
