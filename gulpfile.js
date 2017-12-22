let gulp = require('gulp');

let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
    return gulp.src('src/server/**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});


gulp.task('default', ['ts']);
