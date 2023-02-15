/** Promise.all 的使用 */
// const p = Promise.all([p1, p2, p3]);
/** 
Promise.all方法接受一个数组作为参数，
p1、p2、p3都是 Promise 实例，
如果不是，就会先调用下面讲到的Promise.resolve方法，
将参数转为 Promise 实例，再进一步处理。
（Promise.all方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。）
*/
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let idx = 0;
    function handleData(data) {
      result[idx++] = data;
      if (idx === promises.length) {
        resolve(result);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        handleData(data);
      }, reject);
    }
  });
}
const pro1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("1");
  }, 1000);
});
const pro2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("2");
  }, 2000);
});
const pro3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("3");
  }, 3000);
});

const proAll = PromiseAll([pro1, pro2, pro3])
  .then(
    (res) => console.log(res) // 3秒之后打印 ["1", "2", "3"]
  )
  .catch((e) => {
    console.log(e);
  });
