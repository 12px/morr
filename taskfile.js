'use strict';

const plugins = [
  require('postcss-import'),
  require('postcss-cssnext'),
  require('cssnano')
];

module.exports = {

  * styles (task) {
    yield task.source('src/css/morr.css')
          .postcss({ from: 'src/css/morr.css', plugins: plugins })
          .rename({ suffix: '.min' }).target('dist');
  },

  * scripts (task) {
    yield task.source('src/js/morr.js')
          .babel({ preload: true, minified: true, comments: false })
          .rename({ suffix: '.min' }).target('dist');
  },

  * build (task) { yield task.serial(['styles', 'scripts']); },

  * default (task) {
    yield task.start('build');
    yield task.watch('src/css/*.css', 'styles');
    yield task.watch('src/js/*.js', 'scripts');
  }

};
