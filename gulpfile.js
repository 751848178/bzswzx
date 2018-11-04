const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('build-scss', () => {
    return gulp.src('src/static/sass/index.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest('src/static/styles/'));
});

gulp.task("build:watch", () => {
    gulp.watch('src/static/sass/**/*.scss', ['build-scss']);
});

gulp.task("default", ["build-scss", "build:watch"]);

