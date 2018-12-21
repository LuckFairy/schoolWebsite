'use strict'
// node自带的文件路径工具
const path = require('path')
// 配置文件
const config = require('../config')
// 提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

/**
 * 生成静态资源的路径
 * @method assertsPath
 * @param  {String}    _path 相对于静态资源文件夹的文件路径
 * @return {String}          静态资源完整路径
 */
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  //  path.posix.join与path.join一样，不过总是以 posix 兼容的方式交互
  return path.posix.join(assetsSubDirectory, _path)
}

/**
 * 生成处理css的loaders配置
 * @method cssLoaders
 * @param  {Object}   options 生成配置
 *                            option = {
 *                              // 是否开启 sourceMap
 *                              sourceMap: true,
 *                              // 是否提取css
 *                              extract: true
 *                            }
 * @return {Object}           处理css的loaders配置对象
 */
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  /**
   * 生成 ExtractTextPlugin对象或loader字符串
   * @method generateLoaders
   * @param  {Array}        loaders loader名称数组
   * @return {String|Object}        ExtractTextPlugin对象或loader字符串
   */
  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        // 例如，sass?indentedSyntax
        // 在?号前加上“-loader”
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    // extract为true时，提取css
    // 生产环境中，默认为true
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

/**
 * 生成 style-loader的配置
 * style-loader文档：https://github.com/webpack/style-loader
 * @method styleLoaders
 * @param  {Object}     options 生成配置
 *                              option = {
 *                                // 是否开启 sourceMap
 *                                sourceMap: true,
 *                                // 是否提取css
 *                                extract: true
 *                              }
 * @return {Array}              style-loader的配置
 */
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
