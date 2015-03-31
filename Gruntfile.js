module.exports = function(grunt) {

    grunt.initConfig({
        karma:  {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            files: ['<%= karma.files %>'],
            tasks: ['karma']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['karma']);

};