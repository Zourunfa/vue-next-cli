import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { join } from 'path'
import htmlWebpackPlugin from 'html-webpack-plugin'


export default {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    // 让这些后缀的文件省略后缀后照样可以打包
    extensions: [".ts", ".tsx", ".vue", ".js"]
  },
  devServer: {
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'home',
      template: './src/index.html',
    })
  ]
}