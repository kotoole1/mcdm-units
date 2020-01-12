const path = require('path');

module.exports = {
  pages: {
    'index': {
      entry: './src/main.ts',
      template: 'public/index.html',
      title: 'MCDM Unit creator'
    },
    'print': {
      entry: './src/pages/print/main.ts',
      template: 'public/index.html',
      title: 'Print MCDM Units'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mcdm-units/'
    : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/*.less'),
      ],
    },
    chainWebpack: config => {
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
      types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)));
    }
  }
};

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/global.less'),
      ],
    })
}
