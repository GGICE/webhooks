"use strict";
var data = require('../data/data'),
  exec = require('child_process').exec;

module.exports = function* (next) {
  console.log(this.query);
  var query = this.query,
      path;

  if (!query.secret) {
    return this.body = {
      Error: 'No secret'
    };
  }

  for (var i = 0; i < data.length; i++) {
    if (data[i].secret === query.secret) {
      exec('cd ' + data[i].path, function(error, stdout){
        if(error) {
          console.log('Do clone');
          console.log(error);
          path = data[i].path.split('/')
          path = data[i].path.replace(path[path.length -1], '');          
          exec('cd ' + path + '&&git clone ' + data[i].gitUrl, 
            function (error, stdout){
              console.log(error);
          });
         
        }else{
          console.log('Do pull');
          exec('cd ' + data[i].path + '&&git pull', function(error, stdout){
            if(error) {
              console.log(error);
            }else{
              console.log(stdout);
              exec(data[i].do,  function(error, stdout){
                if(error) {
                  console.log(error);
                }else {
                  console.log(stdout);
                }
              });
            }
          });
        }
      });
      return this.body = {
         Success: ' Success'
      };
    }
  }
};