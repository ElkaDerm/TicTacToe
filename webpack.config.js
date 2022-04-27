
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const configuration = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tik Tak Toe',
            template: 'public/index.html',
        }),
    ],
};

export default configuration;