exports.plugins = [
    {
        name: 'useAsyncEffect',
        cate: 'Base Hooks',
    },
    {
        name: 'useCreation',
        cate: 'Base Hooks',
    },
    {
        name: 'useDebounce',
        cate: 'Base Hooks',
    },
    {
        name: 'useEventCb',
        cate: 'Base Hooks',
    },
    {
        name: 'useForceUpdate',
        cate: 'Base Hooks',
    },
    {
        name: 'useInterval',
        cate: 'Base Hooks',
    },
    {
        name: 'useLatest',
        cate: 'Base Hooks',
    },
    {
        name: 'useLockFn',
        cate: 'Base Hooks',
    },
    {
        name: 'useMap',
        cate: 'Base Hooks',
    },
    {
        name: 'useMemoizedFn',
        cate: 'Base Hooks',
    },
    {
        name: 'useOnLoad',
        cate: 'Taro Hooks',
    },
    {
        name: 'useOnUpdate',
        cate: 'Taro Hooks',
    },
    {
        name: 'useRefProps',
        cate: 'Base Hooks',
    },
    {
        name: 'useSet',
        cate: 'Base Hooks',
    },
    {
        name: 'useSetState',
        cate: 'Base Hooks',
    },
    {
        name: 'useStateRef',
        cate: 'Base Hooks',
    },
    {
        name: 'useThrottle',
        cate: 'Base Hooks',
    },
    {
        name: 'useTimeout',
        cate: 'Base Hooks',
    },
    {
        name: 'useUICountDown',
        cate: 'Base Hooks',
    },
    {
        name: 'useIntersectionObserver',
        cate: 'Taro Hooks',
    },
    {
        name: 'useUnmount',
        cate: 'Base Hooks',
    },
    {
        name: 'useWait',
        cate: 'Base Hooks',
    },
].map((item) => (['docusaurus-plugin-typedoc', {
    id: item.name,
    entryPoints: [`../jhooks/packages/${item.name}/index.ts`],
    tsconfig: '../jhooks/tsconfig.json',
    out: `./${item.cate.replace(' ', '')}`,
    includeExtension: false,
    readme: 'none',
    entryDocument: `${item.name}.md`,
    indexSlug: item.name,
    watch: process.env.TYPEDOC_WATCH,
    theme: 'jhooks',
    plugin: ['typedoc-plugin-rename-defaults', './docusaurus-jhooks-typedoc-plugin.js'],
    sidebar: {
        fullNames: true,
        categoryLabel: item.cate,
        indexLabel: item.name,
        position: null,
    },
}]));