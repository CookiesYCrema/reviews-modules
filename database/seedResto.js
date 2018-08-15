const faker = require('faker');
const fs = require('fs');

const writer = fs.createWriteStream('./dataResto2.csv');

function writeOneMillionTimes(writer, encoding, callback) {
  let i = 10;
  function write() {
    let ok = true;
    do {
      const model = [
        i.toString(), // restaurant id
        faker.commerce.productName(), // restaurant:
      ];
      i -= 1;
      if (i === 0) {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        ok = writer.write(`${model.join(',')}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
writeOneMillionTimes(writer, 'utf8', () => { console.log('done'); });