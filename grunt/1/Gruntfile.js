module.exports = function (grunt) {


    /* 配置任务 */
    grunt.initConfig({
        greet: {
            english: 'hello'
        },
        sayHi: {
            english: 'Hello',
            spanish: 'Hola',
            chinese: '你好'
        },
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            html: {
                src: 'index.html',
                dest: 'dist/',

            },
            css: {
                src: 'css/*.css',
                dest: 'dist/'
            },
            js: {
                src: 'js/**/*.js',
                dest: 'dist/'
            }
        },
        watch: {
            html: {
                files: ['index.html'],
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            site1: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    base: 'dist/',
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: [{
                    'dist/css/index.css': 'css/index.scss'
                }, {
                    expand: true,
                    cwd: 'css', //启动目录
                    src: ['**/*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        less: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css', //启动目录
                    src: ['**/*.less'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        concat: {
            js: {
                src: ['js/a.js', 'js/b.js'],
                dest: 'dist/js/full.js'
            }
        },
        uglify: {
            dist: {
                src: '<%= concat.js.dest %>',
                dest: 'dist/js/app.min.js'
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist', //启动目录
                    src: ['**/*.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }],
            }
        }


    })

    /* 加载插件 */
    grunt.loadNpmTasks('grunt-contrib-copy');
    /* watch */
    grunt.loadNpmTasks('grunt-contrib-watch');
    /* 热更新 */
    grunt.loadNpmTasks('grunt-contrib-connect');
    /* sass编译 */
    grunt.loadNpmTasks('grunt-contrib-sass');
    /* less编译 */
    grunt.loadNpmTasks('grunt-contrib-less');
    /* 合并 */
    grunt.loadNpmTasks('grunt-contrib-concat');
    /* 压缩js */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /* 压缩css */
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('greet-1', function () {
        grunt.log.writeln(grunt.config.get('greet.english'))
        grunt.log.writeln(`你好`)
    })

    grunt.registerTask('greet-2', function () {
        grunt.log.writeln(`hola`)
    })

    grunt.registerTask('greet-3', function (name) {
        /* 
        可以通过 grunt.warn 抛出错误
        在异常情况下可以通过执行 grunt <taskname>:params --force 来继续执行之后的任务。
        */
        if (!name) {
            grunt.warn('没有传入参数name')
        }
        grunt.log.writeln(`hello ${name}`)
    })

    /* 执行多个任务 */
    grunt.registerTask('greetAll', ['greet-1', 'greet-2', 'greet-3'])

    /*
        grunt.registerTask(taskName, [description, ] taskFunction) 注册任务
        taskName = default ，默认执行的任务
        可以在命令行中执行 grunt <taskname>:params 执行任务
        也可以在taskFunction 中执行 grunt.task.run(<taskname>,<taskname>) or grunt.task.run([<taskname>,<taskname>]) 来调用其它任务
    */
    grunt.registerTask('default', "grunt default task", function () {
        grunt.log.writeln('hello grunt');
        grunt.task.run(`greet-1`)
    })



    /* 多任务 */
    grunt.registerMultiTask("sayHi", function () {
        grunt.log.writeln(`${this.target}:${this.data}`)
    })

    /* grunt.file */
    grunt.registerTask("createFolders", function () {
        grunt.file.mkdir('dist/css');
    })

    grunt.registerTask("clean", function () {
        grunt.file.delete("dist")
    })



    grunt.registerTask('copyright', function () {
        const content = grunt.template.process(`<%= pkg.name %> 这个项目是由 <%= pkg.author %> 创建的，现在的版本是 <%= pkg.version %>`);
        grunt.file.write('copyright.txt', content)
    })


    grunt.registerTask('serve', ["connect", "watch"])

    grunt.registerTask('build', ['clean', 'concat', 'uglify', 'sass', 'less', 'cssmin'])

}