const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/nft',
    createProxyMiddleware({
      target: 'https://api.asknfty.com/',
      changeOrigin: true,
    })
  );
};
