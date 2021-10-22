import { defineConfig } from 'dumi';
import path from 'path';

const global_sass = path.resolve(__dirname, 'node_modules/@alifd/theme-epweb-default/variables.scss');
const repo = 'lykang';

export default defineConfig({
  title: ' ',
  favicon: '/logo.png',
  logo: '/logo.png',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  resolve: {
    includes: ['docs', 'packages'],
  },
  navs: [
    null,
    {
      title: 'Git',
      path: 'https://github.com/complicated2018/react-component-template.git',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {},
  mfsu: {},
  chainWebpack: (config: any) => {
    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach((item: any) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: global_sass,
        })
        .end();
    });
  },
  // more config: https://d.umijs.org/config
});
