const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use( 
    proxy('/qqc',{
    target: 'https://c.y.qq.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/qqc': ''
    }
  }),
  proxy('/qqu',{
    target: 'https://u.y.qq.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/qqu': ''
    }
  })
  )
}

