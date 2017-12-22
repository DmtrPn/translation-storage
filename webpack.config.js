const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: './src/client/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader/webpack',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['es2015', 'react'],
                            plugins: [
                                "transform-decorators-legacy",
                                ["transform-async-to-module-method", {
                                    "module": "bluebird",
                                    "method": "coroutine"
                                }]
                            ],


                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true, // true outputs JSX tags
                            svgo: {
                                plugins: [
                                    { removeTitle: false }
                                ],
                                floatPrecision: 2
                            },

                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        proxy: {
            '/api': 'http://localhost:8000'
        }
    },

    devtool: 'cheap-eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};