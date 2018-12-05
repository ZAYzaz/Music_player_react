
//const proxy = require('http-proxy-middleware')
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
  return PATH.resolve(__dirname, 'src/', url)
}

// module.exports = function(app){
//   app.use( proxy('/api',{
//     target: 'https://c.y.qq.com/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': ''
//     }
//   }))
// }

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
  
   // 配置别名
   config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(''),
      '@as': resolve('assets'),
      '@c': resolve('components'),
      '@commons': resolve('components/commons'),
      '@pages': resolve('pages'),
      '@lib': resolve('lib'),
      '@hoc': resolve('components/hoc'),
      "@store": resolve('store'),
      "@connect": resolve('connect'),
  }
  //console.log(config.resolve.alias)
  
  
  return config;
};