const babel = require("gulp-babel");
const browserSync = require("browser-sync");
const concat = require("gulp-concat");
const del = require("del");
const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const uglify = require("gulp-uglify");

const server = browserSync.create();

const paths = {
    html: {
        src: "src/*.html",
        dest: "dist/",
    },
    images: {
        src: "src/images/*",
        dest: "dist/images",
    },
    scripts: {
        src: "src/js/*.js",
        dest: "dist/js/",
    },
    styles: {
        src: "src/scss/*.scss",
        dest: "dist/css/",
    },
};

const clean = () => del(["dist", "css"]);

function scripts() {
    return gulp
        .src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat("index.min.js"))
        .pipe(gulp.dest(paths.scripts.dest, { sourcemaps: "." }));
}

function styles() {
    return gulp
        .src(paths.styles.src, { sourcemaps: true })
        .pipe(gulpSass())
        .pipe(gulp.dest(paths.styles.dest, { sourcemaps: "." }));
}

function html() {
    return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest));
}

function images() {
    return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({ server: { baseDir: "./dist" } });
    done();
}

const watch = () =>
    gulp.watch(
        [paths.styles.src, paths.scripts.src, paths.html.src, paths.images.src],
        gulp.series(styles, scripts, html, images, reload)
    );

const dev = gulp.series(clean, styles, scripts, html, images, serve, watch);
module.exports.default = dev;
