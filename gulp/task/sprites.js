var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del')

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                //css, less, sass....
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};
//clean old sprites
gulp.task('beginClean', function () {
    return del(['./app/teml/sprite' , './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'] , function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});


gulp.task('copySpritesGraphic', ['createSprite'], function () {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});


// [''] is dependencies that let createSprite task run first and then copySpritesCSS task after
gulp.task('copySpriteCSS', ['createSprite'], function () {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpritesGraphic','copySpriteCSS' ], function () {
   return del('./app/temp/sprite')
});


gulp.task('icons',  ['beginClean', 'createSprite', 'copySpritesGraphic', 'copySpriteCSS', 'endClean']);