import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'



// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.js', '.json', '.vue', 'index'],
        alias: {
            '@': resolve(__dirname, '.', 'src'),
            'styles': resolve(__dirname, '.', 'src/assets/styles'),
            'js': resolve(__dirname, '.', 'src/assets/js'),
            'utils': resolve(__dirname, '.', 'src/utils'),
            'models': resolve(__dirname, '.', 'src/models'),
            'components': resolve(__dirname, '.', 'src/components'),
        },
    },
    // css: {
    //     // css预处理器
    //     preprocessorOptions: {
    //         scss: {
    //             charset: false,
    //             //需要在assets下创建对应的文件global.scss
    //             additionalData: '@import "./src/assets/styles/main.scss";',
    //         },
    //     },
    // }
})

