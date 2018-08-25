const fs = require('fs');

const fsWrite = fs.createWriteStream('./ids.csv');

function writeIds(writer, encoding, callback) {
  let i = 600000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === 0) {
        writer.write(`${1 + Math.floor(Math.random()) * 999999}`, encoding, callback);
      } else {
        ok = writer.write(`${1 + Math.floor(Math.random() * 999999) }\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeIds(fsWrite, 'utf8', () => { console.log('done'); });
