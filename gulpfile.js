//-----------------------------------------------------
// Coderix
// by Sebastian Serna
// (c) 2019-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
// Project specific
const sass = require('gulp-sass'); 
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');


//-----------------------------------------------------
// Server tasks
//-----------------------------------------------------

function watch_files() {
  browserSync.init({
    server: {
        baseDir: 'docs',
        index: 'index.html',
        ghostMode: false,
        serveStaticOptions: {
          extensions: ['html']
        }
    }
  });

  watch('./docs/**/*').on('change', browserSync.reload);
  watch('./docs/**/*.html').on('change', browserSync.reload);
  watch('./src/**/*.scss', series(sass_compiler, reload));
  watch('./src/**/*.js', series(js_concat, reload));
  watch('package.json', series(sass_compiler, reload));
}

function reload(done) {
    browserSync.reload();
    done();
}

//-----------------------------------------------------
// Sass compiler task
//-----------------------------------------------------

// Sass paths
var inputSass = 'src/styles/*.scss';
var outputSass = 'dist/';
var outputDocs = 'docs/dist/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

function sass_compiler() {
  return src(inputSass)
    .pipe(plumber())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(dest(outputSass))
    .pipe(dest(outputDocs))
    .pipe(cleanCSS())
    .pipe(rename('coderix.min.css'))
    .pipe(dest(outputSass))
    .pipe(dest(outputDocs));
}

//-----------------------------------------------------
// JavaScript Concat files 
//-----------------------------------------------------

// JS paths
var inputJs = [
    "src/scripts/coderix-version.js",
    "src/scripts/codemirror.js",
    "src/scripts/codemirror-mode-javascript.js",
    "src/scripts/codemirror-mode-xml.js",
    "src/scripts/codemirror-mode-css.js",
    "src/scripts/codemirror-mode-vue.js",
    "src/scripts/codemirror-mode-htmlmixed.js",
    "src/scripts/coderix.js"
];
var outputJs = 'dist/';
var outputJsDocs = 'docs/dist/';

function js_concat() {
  return src(inputJs)
    .pipe(plumber())
    .pipe(concat('coderix.js'))
    .pipe(dest(outputJs))
    .pipe(dest(outputJsDocs))
    .pipe(rename('coderix.min.js'))
    .pipe(terser())
    .pipe(dest(outputJs))
    .pipe(dest(outputJsDocs));
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;
exports.sass = series(sass_compiler);
exports.js = series(js_concat);
exports.build = series(sass_compiler, js_concat);