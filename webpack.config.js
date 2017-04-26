var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	plugins: [
		// 添加我们的插件 会自动生成一个html文件
		new HtmlwebpackPlugin({
			template: path.resolve(APP_PATH, 'index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		// 它用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
		// new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
	],
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					},
				],
				include: APP_PATH
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url?limit=40000' // 当你图片大小小于这个限制的时候，会自动启用 base64 编码图片。
			},
      {
        test: /\.json$/,
        use: 'json-loader'
      }
		]
	},
	devServer: {
		historyApiFallback: true,
		hot: false,
		inline: false,
		// progress: true, // ?? why this broken
		// proxy: {
		//     '*': {
		//         target: 'http://localhost',
		//         secure: false
		//     }
		// }
	}

}