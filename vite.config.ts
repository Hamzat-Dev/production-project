import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                exportType: 'default',
            },
            include: '**/*.svg',
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    esbuild: {
        target: 'es2020',
    },
    build: {
        target: 'es2020',
    },
});
