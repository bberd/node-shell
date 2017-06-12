var fs = require('fs');

module.exports = {
    pwd: function(){
        process.stdout.write(process.cwd());
    },
    date: function(){
        process.stdout.write(Date().toString());
    },
    ls: function() {
        fs.readdir('.', function(_err, data) {
          process.stdout.write(data.toString());
        });
        //process.stdout.write(fs.readdirSync('.').toString()); --sync version
    },
    echo: function(phraseToEcho) {
      if (phraseToEcho === '$PATH') process.stdout.write(process.env.PATH.toString());
      else process.stdout.write(phraseToEcho);
    },
    cat: function(filename) {
      fs.readFile('./' + filename, function(_err, data) {
        process.stdout.write(data.toString());
      });
    },
    head: function(fileName){
      fs.readFile('./' + fileName, function(_err, data) {
        var dataArr = data.toString().split('\n');
        for (var i = 0; i < 5; i++){
          process.stdout.write(dataArr[i].toString() + '\n');
        }
      });
    },
    tail: function(fileName){
      fs.readFile('./' + fileName, function(_err, data) {
        var dataArr = data.toString().split('\n');
        for (var i = dataArr.length - 5; i < dataArr.length; i++){
          process.stdout.write(dataArr[i].toString() + '\n');
        }
      });
    }
};
