
var gulp = require('gulp')

gulp.task('welcome', function () {
  console.log("welcome to my life")
})

gulp.task('hello',['welcome'] , function (){
console.log("hello world")
})
