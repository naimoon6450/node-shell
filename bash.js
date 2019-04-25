const commands = require('./commands.js');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var input = data
    .toString()
    .trim()
    .split(' ');
  var cmd = input[0];
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

  // process.stdout.write('You typed: ' + cmd);
});
