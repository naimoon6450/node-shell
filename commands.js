const fs = require('fs');

const pwd = (fileName) => {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

const date = (fileName) => {
  const now = new Date();
  process.stdout.write(now.toString());
};

const ls = (fileName) => {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('prompt > ');
  });
};

const echo = (fileName) => {
  let printMe = fileName.join(' ');
  if (printMe === '$PATH') {
    printMe = process.env.PATH;
  }
  process.stdout.write(printMe + '\n');
  process.stdout.write('prompt > ');
};

const cat = (fileName) => {
  let fileContent;
  function readFile(callBack) {
    fs.readFile(fileName, (err, content) => {
      if (err) return callBack(err);
      callBack(null, content);
    })
  }
  
  readFile((err, content) => {
    if (err) {
      process.stdout.write('Failes to read!\n');
      process.stdout.write('prompt > ');
    }
    //must place what you want to do with the result within the callback
    //asynchronous call so must be done together not outside of this
    fileContent = content.toString();
    //will print out the file contents
    process.stdout.write(fileContent + '\n');
    process.stdout.write('prompt > ');
  })
};



module.exports = { pwd, date, ls, echo, cat };
