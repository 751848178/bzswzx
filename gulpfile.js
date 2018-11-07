const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build-scss', () => {
    return gulp.src('src/static/sass/index*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/static/styles/'));
});

gulp.task("build:watch", () => {
    gulp.watch('src/static/sass/**/*.scss', ['build-scss']);
});

gulp.task("build", () => {
    return gulp.src('src/static/sass/index*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/static/styles/'));
});

gulp.task("default", ["build-scss", "build:watch"]);

