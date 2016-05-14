module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
          development: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            files: {
                "css/main.min.css": "less/main.less"
            }
          }
        },
        uglify: {
            build: {
                src: ['js/*.js'],
                dest: 'js/scripts.min.js'
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            options: {
                livereload: true
            },
            js: {
                files: "js/*.js",
                tasks: ["uglify"]
            },
            html: {
                files: "*.html"
            }
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify','connect', 'watch']);
};
