"use strict";
 let gulp = require('gulp');
 let ts= require('gulp-typescript');
 let del= require('del');
 var tsProject=ts.createProject("tsconfig.json");

 //gulp task to clean
 gulp.task('clean:lib',()=>{
     return del(['lib/**/*'])
 })

 //gulp task to build

 gulp.task("tsc",function(){
     return tsProject.src()
            .pipe(tsProject())
            .js.pipe(gulp.dest("lib"));
 });

 gulp.task("default",gulp.series("clean:lib","tsc"),function(){
 });