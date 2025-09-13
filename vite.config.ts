import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import path from 'path';


function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vite.dev/config/
export default defineConfig({
  publicDir: process.env.NODE_ENV === "development" ? "public" : false,
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    open: false,
    watch: {
      usePolling: true, // 修复HMR热更新失效
    },
  },
  plugins: [react(), typescript({
    compilerOptions: {
      target: "esnext", // 指定ECMAScript目标版本
      module: "esnext",
      lib: [
        "ES6",
        "DOM",
      ],
      rootDir: "./packages",
      declaration: true, // 生成 `.d.ts` 文件
      outDir: "./dist", // 编译后生成的文件目录
      strict: false,
      jsx: "react-jsx",
      noEmit: false, // 确保 noEmit 为 false（默认值）
      emitDeclarationOnly: false, // 确保 emitDeclarationOnly 为 false（默认值）
      allowImportingTsExtensions: false, // 禁用该选项
    },
    include: [
      resolve("./packages/**/*"),
    ],
    exclude: [
      resolve("./node_modules/**/*"),
      resolve("**/*.scss"),
      resolve("**/*.module.scss"),
    ],
  }),],
  build: {
    cssCodeSplit: false,
    // 打包输出的目录
    outDir: 'dist',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('packages/index.ts'),
      // 组件库名称
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'typescript'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
});
