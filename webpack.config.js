const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports = {
     entry: {
        app: './src/index.js'
     },
     output:{
        filename:'bundle.js',
        path:"/dist"
     },
     plugins: [
      new HtmlWebpackPlugin({
         filename: "./index_prod.html",
         template: "./src/template/index.ejs",
         inject: false
      }),
      // new VueLoaderPlugin()
    ],
   //   配置所有第三方模块 加载器
   module:{
   
      rules:[
         // 匹配规则
         {test: /\.css$/,use:['style-loader','css-loader']},
         {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
         // // url-loader file-loader limit限制图片KB 小于就转成base64格式的字符串
         {test: /\.(jpg|png|gif)$/,use:'url-loader?limit=8844&name=[hash:8]-[name].[ext]'},
         // // 字体文件
         {test:/|.(ttf|eot|avg|woff)$/,use:'url-loader'},
         // 打包vue文件
         {test:/\.vue$/,use:'vue-loader'},
         // babel 排除modules
         // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
      ]
   }
  
  }