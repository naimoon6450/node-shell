const fs = require('fs');

const pwd = () => {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

const date = () => {
  const now = new Date();
  process.stdout.write(now.toString());
};

const ls = () => {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
};

const echo = args => {
  let printMe = args.join(' ');
  if (printMe === '$PATH') {
    printMe = 'i am the path directory';
  }
  process.stdout.write(printMe + '\n');
  process.stdout.write('prompt > ');
};
module.exports = { pwd, date, ls, echo };
