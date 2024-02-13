module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    'dist/css/styles.css': 'src/less/styles.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/script.min.js': ['src/js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};