import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';


export default {
    input: './src/index.js',
    moduleName: 'synapse-ui-v2',
    sourcemap: true,

    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle',
        sourcemap: true
    },

    plugins: [
        postcss({
            modules: true
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        resolve(),
        commonjs(),
        alias({
            resolve: ['.jsx', '.js'],
            entries: {
                globalStyles: path.resolve(__dirname, './src/styles/_global.scss'),
                components: path.resolve(__dirname, './src/components')
            }
        })
    ],

    external: ['react', 'react-dom'],

    globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
