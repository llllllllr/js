/** MDN generator */
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20

/** my generator */
https://hackernoon.com/async-await-generators-promises-51f1a6ceede2

const doTask1 = () => {
  return "doTask1";
};
const doTask2 = () => {
  return "doTask2";
};
// function spawn(genF) {
//   return new Promise(function (resolve, reject) {
//     var gen = genF();
//     function step(nextF) {
//       try {
//         var next = nextF();
//       } catch (e) {
//         return reject(e);
//       }
//       if (next.done) {
//         return resolve(next.value).then(
//           function (v) {
//             step(function () {
//               return gen.next(v);
//             });
//           },
//           function (e) {
//             step(function () {
//               return gen.throw(e);
//             });
//           }
//         );
//       }
//     }
//     step(function () {
//       return gen.next(undefined);
//     });
//   });
// }

function runner(genFn) {
  const itr = genFn();
  console.log("abcd", itr);
  function run(arg) {
    let result = itr.next(arg);
    if (result.done) {
      return result.value;
    } else {
      return Promise.resolve(result.value).then(run);
    }
  }
  return run();
}
const a = runner(function* () {
  const res1 = yield doTask1();
  console.log(res1);
  const res2 = yield doTask2();
  console.log(res2);
});

console.log(a);
