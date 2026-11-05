import {defineConfig} from 'vite';
export default defineConfig({define:{"process.env.NODE_ENV":JSON.stringify("production")},build:{outDir:'dist/interactive',emptyOutDir:true,lib:{entry:'src/main.tsx',formats:['es'],fileName:'gravita'},rollupOptions:{output:{inlineDynamicImports:true}},minify:'esbuild',target:'es2022'}});
