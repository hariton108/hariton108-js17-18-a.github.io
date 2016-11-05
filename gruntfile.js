module.exports = function(grunt) {

  grunt.initConfig({
    
    concat: {
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      },
      css: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.min.css'
      }
    },

    uglify: {
      dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
      }
    },

    cssmin: {
      dist:{
        src: ['css/dist/style.min.css'],
        dest: 'css/dist/style.min.css'
      }
    },

    watch: {
      script: {
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify']
      },
      css: {
        files: ['css/src/*.css'],
        tasks: ['concat', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};