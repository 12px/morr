'use strict';

import gulp from 'gulp';
import less from 'gulp-less';
import watch from 'gulp-watch';
import clean from 'gulp-clean-css';


export function watcher() {
  return watch('./src/**/*.less', compile);
};

export function compile() {
  return gulp.src('./src/morr.less')
             .pipe( less() )
             .pipe( clean({ compatibility: 'ie8' }) )
             .pipe( gulp.dest('./dist') );
};

const start = gulp.series(compile, watcher);

export default start;