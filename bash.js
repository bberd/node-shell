var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
   var enteredText = data.toString().trim();
   var cmdArr = enteredText.split(' ');
   var cmd = cmdArr[0];
   var file = cmdArr.slice(1).join(' ');

   commands[cmd](file);

   process.stdout.write('\nprompt > ');
});
