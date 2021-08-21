const lodash = require('lodash');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs   = require('fs');

function srcPaths(src) {
  return path.join(__dirname, src);
}

const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = process.env.NODE_ENV === 'development';


//=========================================================================================
// #region Common settings
const commonConfig = {
  devtool: isEnvDevelopment ? 'source-map' : false,
  mode: isEnvProduction ? 'production' : 'development',
  output: { path: srcPaths('dist') },
  node: { __dirname: false, __filename: false },
  resolve: {
    alias: {
      _: srcPaths('src'),
      _main: srcPaths('src/main'),
      _models: srcPaths('src/models'),
      _test: srcPaths('src/test'),
      _public: srcPaths('public'),
      _renderer: srcPaths('src/renderer'),
      _utils: srcPaths('src/utils'),
    },
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|ico|icns)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
    ],
  },
};
// #endregion

//=========================================================================================
//main config
const mainConfig = lodash.cloneDeep(commonConfig);
mainConfig.entry = './src/main/main.ts';
mainConfig.target = 'electron-main';
mainConfig.output.filename = 'main.bundle.js';
mainConfig.plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: 'package.json',
        to: 'package.json',
        transform: (content, _path) => { // eslint-disable-line no-unused-vars
          const jsonContent = JSON.parse(content);

          delete jsonContent.devDependencies;
          delete jsonContent.scripts;
          delete jsonContent.build;

          jsonContent.main = './main.bundle.js';
          jsonContent.scripts = { start: 'electron ./main.bundle.js' };
          jsonContent.postinstall = 'electron-builder install-app-deps';

          return JSON.stringify(jsonContent, undefined, 2);
        },
      },
    ],
  }),
];
//=========================================================================================
const rendererConfig = lodash.cloneDeep(commonConfig);
rendererConfig.entry = './src/renderer/renderer.tsx';
rendererConfig.target = 'electron-renderer';
rendererConfig.output.filename = 'renderer.bundle.js';
rendererConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
  }),
];
//=========================================================================================

const preloadConfig = lodash.cloneDeep(commonConfig);
preloadConfig.entry = './src/main/preload.ts';
preloadConfig.target = 'electron-main';
preloadConfig.output.filename = 'preload.bundle.js';
preloadConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
  }),
];
//=========================================================================================
// testing dependencies ts file
const dependenciesConfig = lodash.cloneDeep(commonConfig);
dependenciesConfig.entry = './src/test/dependencies.ts';
dependenciesConfig.target = 'electron-main';
dependenciesConfig.output.filename = 'app.js';
dependenciesConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './public/index.html'),
  })
]
//=========================================================================================
// this Config is Building monoaco-editor for WebPack Config
// See Also：https://github.com/webpack/webpack/issues/4899
const editorConfig = {
  devtool: false,
	entry: {
		app: './js/index.js',
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
		'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
		'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
		'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
		'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
	},
	output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	}
};

//=========================================================================================

module.exports = [mainConfig, editorConfig, rendererConfig, preloadConfig, dependenciesConfig];
