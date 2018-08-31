const faker = require('faker');
const fs = require('fs');
// var read = fs.createReadStream('./read');
const write = fs.createWriteStream('./database/data/dataReview.csv');

function writeOneMillionTimes(writer, encoding, callback) {
  let i = 3000000;
  function write() {
    let ok = true;
    do {
      const model = [
        i.toString(), // reviewId:
        Math.floor(Math.random() * 5), // rating:
        '2018-01-01T00:00:00.00Z', // time_created
        faker.lorem.paragraph(), // text:
        faker.image.food(), // review_pic:
        1 + Math.floor(Math.random() * 999998), // restaurant id
        1 + Math.floor(Math.random() * 999998), // user id
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      i -= 1;
      if (i % 100000 === 0) { console.log(i); }
      if (i === 0) {
        // last time!
        //   fs.appendFile('data.csv', `\n${model.join(',')}`, (err) => {
        writer.write(`${model.join(',')}`, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`${model.join(',')}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}
writeOneMillionTimes(write, 'utf8', () => { console.log('done'); });
// fs.writeFile('data.csv', '#', (err) => {
//   if (err) { console.error(err); }
// fs.appendFile('data.csv')

// const i = 0;
// console.time('forming models');
// console.time('seeding');

// function batchSeed(i) {
//   if (i === 10**6) { return 'done'; }
//   if (i % 500 === 0) { console.log(i); }
//   // models.push(
//     //   new ReviewModel({
//   const model = ``
//     ${i.toString(), // reviewId:
//     ${faker.company.catchPhrase, // restaurant:
//     ${Math.floor(Math.random() * 5), // rating:
//     ${faker.lorem.paragraph(), // text:
//     faker.image.food(), // review_pic:
//     faker.image.avatar(), // image_url:
//     faker.name.findName(), // name:
//     faker.address.city(), // location:
//     Math.floor(Math.random() * 100), // friends:
//     Math.floor(Math.random() * 100), // reviews:
//     Math.floor(Math.random() * 100), // photos:
//     Math.random() > 0.5, // elite:
//     // faker.date.past(), // time_created:
//     '2018-01-01 00:00:00.00',
//   `;
//   fs.appendFile('data.csv', `\n${model.join(',')}`, (err) => {
//     if (err) { console.error(err); }
//     // if (i === max) {
//       // console.log('next batch, ', max);
//     batchSeed(i + 1);
//     // }
//   });
//   // })
//   // );
//   // model.save({ if_not_exist: true }, log);
// }

// console.time('4000...');
// batchSeed(1);
// console.timeEnd('4000...');
// });

// // models.forEach(model => model.save());
// console.timeEnd('seeding');
