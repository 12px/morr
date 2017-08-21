'use strict';

const plugins = [
  require('postcss-import'),
  require('postcss-cssnext'),
  require('cssnano')
];

module.exports = {

  * build (task) {
    yield task.source('src/css/morr.css')
          .postcss({ from: 'src/css/morr.css', plugins: plugins })
          .rename({ suffix: '.min' }).target('dist');
  },

  * default (task) {
    yield task.start('build');
    yield task.watch('src/css/*.css', 'build');
  }

};
