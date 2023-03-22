function literalTemplate(str, obj) {
  const reg = /\${(\w*)}/;
  let result = str;
  const res = reg.exec(str);
  if (res) {
    result = result.replace(res[0], obj[res[1]]);
    return literalTemplate(result, obj);
  }
  return str;
}

function lt(str, obj) {
  const reg = /\${(\w*)}/;
  let result = str;
  const regExec = reg.exec(str);
  if (regExec) {
    result = result.replace(regExec[0], obj[regExec[1]]);
    return lt(result, obj);
  }
  return str;
}

let obj = { num1: "abc", num2: "def", num3: "lmn" };
let m = lt("123${num1}456${num2}%", obj);
console.log(m);
