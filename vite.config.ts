/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    checker({
      typescript: true,
    }),
  ],
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      // название библиотеки
      name: 'react-use',
      // форматы генерируемых файлов
      formats: ['es', 'umd'],
      // названия генерируемых файлов
      fileName: (format) => `useReact.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/testUtils/setupTests.ts',
    css: true,
  },
});
