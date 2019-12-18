const path = require('path');

module.exports = {
  pages: {
    'index': {
      entry: './src/main.ts',
      template: 'public/index.html',
      title: 'MCDM Unit creator',
      chunks: [ 'chucnk-vendos', 'chunk-common', 'index' ],
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/*.less'),
      ],
    },
  },
};
