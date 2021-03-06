const { src, dest, watch, series } = require('gulp');
const acss = require('gulp-atomizer');
const browserSync = require('browser-sync').create();

function css(cb) {
  src("./index.html")
    .pipe(acss())
    .pipe(dest("css"))
  cb();
}

exports.css = css;
exports.default = function() {
  browserSync.init({
    server: "."
  });

  series(css);
  watch("./index.html", series(css));
  watch("./css/**/*.css").on('change',  browserSync.reload);
  watch("./index.html").on('change',  browserSync.reload);
};
