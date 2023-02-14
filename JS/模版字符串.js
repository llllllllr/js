function literalTemplate(str, obj) {
  const reg = /\${(\w*)}/;
  let result = str;
  const res = reg.exec(str);
  if (res) {
    result = result.replace(res[0], obj[res[1]]);
    return literalTemplate(result, obj);
  } else {
    return str;
  }
}

let obj = { num1: "abc", num2: "def", num3: "lmn" };
let m = literalTemplate("123${num1}456${num2}%", obj);
console.log(m);
