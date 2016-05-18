/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function(grunt)
{
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    
    grunt.initConfig({
        concat:{
            dest:{
                src:[
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/at-table/dist/angular-table.min.js',
                    'bower_components/angular-resource/angular-resource.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    "src/config.js",
                    "src/app.js",
                    "src/**/*.js"
                ],
                dest:"app/dest/output.min.js"
            },
            style:{
                src:[
                    'bower_components/bootstrap/dist/css/bootstrap.min.css'
                ],
                dest:"app/dest/output.min.css"
            }
        },
        watch:{
            files:['src/*.js','src/**/*.js'],
            tasks:['concat'],
            options:{
                livereload:true
            }
        },
         express: {
            server: {
              options: {
                port: 9000,
                bases: ['app','dist'],
                hostname:"0.0.0.0",
                host:"0.0.0.0",
               
                livereload:true
              }
            }
          }
    });
    
    
    grunt.registerTask('default',['concat','express','watch']);
};