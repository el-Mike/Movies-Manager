'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.js';
import connect from 'gulp-connect';

import karma from 'karma';

const karmaServer = karma.Server;

const bases = {
  sourcePath: `src`,
  distPath: `dist`
};

const serverConfig = {
  root: bases.distPath,
  port: 8888,
  livereload: true
};

const karmaServerConfig = {
  configFile: `${__dirname}/karma.conf.js`,
  singleRun: true
};

gulp.task('clean', () => {
  return del([bases.distPath]);
});

gulp.task('connect', () => {
  connect.server(serverConfig);
});

gulp.task('compile', () => {
	return gulp.src(`${bases.sourcePath}/**/*.js`)
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(bases.distPath))
    .pipe(connect.reload());
});

gulp.task('copyHtml', () => {
 return gulp.src(`${bases.sourcePath}/**/*.html`)
  .pipe(gulp.dest(bases.distPath));
});

gulp.task('watchJs', () => {
  gulp.watch([`${bases.sourcePath}/**/*.js`], ['build']);
});

gulp.task('watchHtml', () => {
  gulp.watch([`${bases.sourcePath}/**/*.html`], ['build']);
});

gulp.task('unitTest', (done) => {
  return new karmaServer(karmaServerConfig, done).start();
});

gulp.task('build', (done) => {
  return runSequence(
    'clean',
    'compile',
    'copyHtml',
    done
  );
});

gulp.task('test', (done) => {
  return runSequence(
    'build',
    'unitTest',
    done
  );
});

gulp.task('default', (done) => {
  return runSequence(
    'build',
    'watchJs',
    'watchHtml',
    'connect'
  );
});
