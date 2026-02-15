/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  let t = 2;
  let str = "";
  function counting(num) {
    if (t > n) return str;
    let count = 1;
    str = "";
    for (let i = 0; i < num.length; i++) {
      if (num[i] === num[i + 1]) {
        count = count + 1;
      } else {
        str = str + count.toString() + num[i].toString();
        count = 1;
      }
    }
    t++;
    return counting(str);
  }
  return counting("1");
};

console.log(countAndSay(6));
