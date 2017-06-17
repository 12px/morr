'use strict';

const src = {
  styles: './src/css/*.css',
  css: './src/css/morr.css',
  scripts: './src/js/*.js',
  js: './src/js/morr.js'
};
const out = './dist';

// Tasks
exports.default = function * (fly) {
  yield fly.start('styles')
  yield fly.start('scripts')
  yield fly.watch(`${src.styles}`, 'styles')
  yield fly.watch(`${src.scripts}`, 'scripts')
};

exports.styles = function * (fly) {
  yield fly.source(`${src.css}`)
    .postcss({
      map: false,
      from: `${src.css}`,
      to: `${out}`,
      plugins: [
        require('postcss-import'),
        require('postcss-cssnext')({
          features: {
            // not sure why it says duplicate
            autoprefixer: false
          }
        }),
        require('cssnano')
      ]
    })
    .rename({ suffix: '.min' })
    .target(`${out}`)
};

exports.scripts = function * (fly) {
  yield fly.source(`${src.js}`)
    .babel({
      preload: true,
      minified: true,
      comments: false
    })
    .rename({ suffix: '.min' })
    .target(`${out}`)
};
