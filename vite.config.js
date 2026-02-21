import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    root: '.',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public',
    server: {
        port: 5173,
        open: true,
        host: true, // listen on 0.0.0.0 so others on your network can access via your IP (e.g. http://192.168.x.x:5173)
    },
});
