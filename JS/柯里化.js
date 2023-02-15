/**
 写一道函数柯里化( sum ( 1 )( 2 )( 3 )( 4 )( 5 )( 6 ) 
 sum ( 1 , 2 )( 3 , 4 )( 5 ) 注意参数个数不确定，不是纯柯里化)
 */
function sum() {
  var args = [].slice.call(arguments); // 把类数组格式的 arguments 转换成数组
  var fun = function () {
    // 利用闭包特性合并 arguments 参数, 生成 newArgs
    var newArgs = args.concat([].slice.call(arguments));
    // 传入合并后的 newArgs, 再次掉用 add 函数(即再次返回 fun)
    return sum.apply(null, newArgs);
  };
  // 利用函数 会自动执行 toString 方法的特性，进行求和操作
  fun.toString = function () {
    args.reduce(function (a, b) {
      return a + b;
    });
  };

  return fun;
}

// const a = sum(1)(2)(3)(4)(5)(6);
// const a = sum(1, 2, 3)(5);
console.log(b.toString());
