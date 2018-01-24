var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var pump = require('pump');

var src = {
	js:[
		'app/*.js',
		'components/*/*.js'
	],
	scss: [
		'app/*.scss',
		'components/*/*.scss'
	]
};

gulp.task('jsCompress', function(){
	pump([
		gulp.src(src.js),
		concat('tutorial.min.js'),
		uglify(),
		gulp.dest('')
	]);
});

gulp.task('scssCompress', function(){
	pump([
		gulp.src(src.scss),
		sass(),
		concat('tutorial.css'),
		gulp.dest('')
	]);
});

gulp.task('watch', function(){
	gulp.watch(src.scss, ['scssCompress']);
	gulp.watch(src.js, ['jsCompress']);
});

gulp.task('default', ['watch', 'jsCompress', 'scssCompress']);