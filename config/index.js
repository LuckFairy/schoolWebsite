'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
// 详情见文档：https://vuejs-templates.github.io/webpack/env.html

const path = require('path')

module.exports = {
  // dev 开发环境
  dev: {

    // Paths
    // 编译输出的二级目录
    assetsSubDirectory: 'static',
    // 编译发布的根目录，可配置为资源服务器域名或CDN域名
    assetsPublicPath: '/',
    // proxyTable 代理的接口（可跨域）
    // 使用方法：https://vuejs-templates.github.io/webpack/proxy.html
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    // 端口号
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // 是否自动打开浏览器
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // 虽然cheap-module-eval-source-map更快，但是它的定位不准确。所以，换成eval-source-map
    // 但是eslint的问题，试了两种，没看出什么区别，都能显示路径和行列信息。。。。
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    // 默认情况下，关闭css sourcemap 因为使用相对路径会报错
    // CSS-Loader README：https://github.com/webpack/css-loader#sourcemaps
    cssSourceMap: true
  },
  // production 生产环境
  build: {
    // 构建输出的index.html文件
    // Template for index.html
    index: path.resolve(__dirname, '../docs/index.html'),
    // 构建输出的静态资源路径
    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'),
    // 构建输出的二级目录
    assetsSubDirectory: 'static',
    // 构建发布的根目录，可配置为资源服务器域名或CDN域名。如果你的后台框架对静态资源url前缀要求，你仅需要改变这个参数。后台有要求的话，一般要加上./或者根据具体目录添加，不然引用不到静态资源
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    // 是否开启cssSourceMap
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 默认关闭Gzip，因为很多流行的静态资源主机，例如Surge、Netlify，已经为所有静态资源开启Gzip
    productionGzip: false,
    // 需要使用Gzip压缩的文件扩展名
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    // 运行‘build’命令时，加上一个参数，可以在构建完成后查看包分析报告
    // true为开启，false为关闭
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
