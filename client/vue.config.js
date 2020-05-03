const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@utils',resolve('src/utils'))
            .set('@components',resolve('src/components'))
            .set('@view',resolve('src/view'))
            .set('@const',resolve('src/const'))
            .set('@api',resolve('src/api'))
    },
    assetsDir: './static/',
    publicPath: process.env.CDN ? '//s3.qiufengh.com/webchat' : '',
    devServer: {
      disableHostCheck: true,
      port: 9099,
      proxy: { // https://cli.vuejs.org/zh/config/#devserver-proxy
        '/socket.io': {
          target: 'http://103.123.160.113:9999',
          ws: true,
          changeOrigin: true
        },
        '/sockjs-node': {
          target: 'http://103.123.160.113:9999',
          ws: false,
          changeOrigin: true
        },
        '/api': {
          target: 'http://103.123.160.113:9999',
          ws: false,
          changeOrigin: true
        },
        '/static': {
          target: 'http://103.123.160.113:9999',
          ws: false,
          changeOrigin: true
        }
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // https://github.com/vuejs/vue-cli/issues/2359
        }
      },
      devtool: 'source-map'
    },
    lintOnSave: false //https://blog.csdn.net/weixin_39194138/article/details/82147832
}
