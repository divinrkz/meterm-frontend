import {defineConfig} from 'vite';

export default defineConfig({
   test: {
       globals: true,
       environment: 'dom'
    //    setupFiles: 'src/setupTests.js',
   },
});