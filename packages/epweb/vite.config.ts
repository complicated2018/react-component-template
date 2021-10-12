import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/router': path.resolve(__dirname, 'src/router'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  // 引用全局 scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@alifd/theme-yozo-default/variables.scss";`,
      },
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'epweb',
      fileName: (format) => `epweb.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          'react-router-dom': 'react-router-dom',
        },
      },
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
  plugins: [
    react(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(__dirname, 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  server: {
    port: 8080, // 开发环境启动的端口
    proxy: {
      // '/api': {
      //   // 当遇到 /api 路径时，将其转换成 target 的值
      //   target: 'http://127.0.0.1:8080/api/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''), // 将 /api 重写为空
      // },
    },
  },
});
