
const faker = require('faker');
const fs = require('fs');

const writer = fs.createWriteStream('./dataUser.csv');

function writeOneMillionTimes(writer, encoding, callback) {
  let i = 1000000;
  function write() {
    let ok = true;
    do {
      const model = [
        i.toString(), // user id
        faker.image.avatar(), // user_image
        faker.name.findName(), // name
        faker.address.city(), // location:
        Math.floor(Math.random() * 100), // friends:
        Math.floor(Math.random() * 100), // reviews:
        Math.floor(Math.random() * 100), // photos:
        Math.random() > 0.5, // elite:
      ];
      i -= 1;
      if (i % 100000 === 0) { console.log(i); }
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