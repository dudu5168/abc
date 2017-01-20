//Grunt
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dist:{
                files:{
                    'css/style.min.css':'css/style.scss'
                }
            }
        },
        cssmin: {
            css: {
                src:'css/style.css',
                dest:'css/style.min.scss'
            }
        },
        watch:{
            css:{
                files:'**/*.scss',
                tasks:['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['cssmin','watch']);
}