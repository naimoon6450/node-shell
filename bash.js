const commands = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var input = data
    .toString()
    .trim()
    .split(' ');
  var cmd = input[0];
  
  //takes the rest of the arguments
  var args = input.slice(1);

  if (cmd === 'pwd') {
    commands.pwd();
  }
  if (cmd === 'date') {
    commands.date();
  }
  if (cmd === 'ls') {
    commands.ls();
  }
  if (cmd === 'echo') {
    commands.echo(args);
  }
  if (cmd === 'cat') {
    //args would be some filename in this case, only takes one arg
    commands.cat(args);
  }
  if (cmd === 'curl') {
    commands.curl(args[0]);
  }
  // process.stdout.write('You typed: ' + cmd);
});
