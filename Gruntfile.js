//Grunt
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        // concat: {//css文件合并
        //     css: {
        //         src: ['src/css/*.css'],//当前grunt项目中路径下的src/css目录下的所有css文件
        //         dest: 'dist/all.css'  //生成到grunt项目路径下的dist文件夹下为all.css
        //     }
        // },
        cssmin: { //css文件压缩
            css: {
                src: 'css/style.css',//将之前的all.css
                dest: 'css/style.min.css'  //压缩
            }
        },
        jshint: { //js代码检查
            all: [
                'js/base.js'
            ],
            options: {
                browser: true,
                devel: true 
            }
        },
        uglify: { //js代码压缩
            build: { 
                files: { 
                    'js/base.min.js' : ['js/base.js'] 
                } 
            } 
        },
        watch: { //监听change
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin']
            },
            js: { 
                files: ['js/base.js'], 
                tasks: ['uglify'] 
            } 
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['cssmin','jshint','uglify','watch']);
}