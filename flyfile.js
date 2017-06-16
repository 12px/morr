'use strict';

const src = {
  styles: './src/css/*.css',
  css: './src/css/morr.css'
};
const out = './dist';

// Tasks
exports.default = function * (fly) {
  yield fly.start('styles')
  yield fly.watch(`${src.styles}`, 'styles')
};

exports.styles = function * (fly) {
  yield fly.source(`${src.css}`).postcss({
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
  }).rename({ suffix: '.min' }).target(`${out}`)
};
