/**
 * @param {string} path
 * @return {string}
 */
// var simplifyPath = function (path) {
//   let arr = path.split("/").filter(Boolean);
//   console.log(arr);
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] !== "..")
//       if (arr[i] !== "." && arr[i] !== "..") {
//         result += "/" + arr[i];
//       }
//   }
//   if (result === "") return "/";
//   else {
//     return result;
//   }
// };

var simplifyPath = function (path) {
  let arr = path.split("/").filter(Boolean);
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "..") {
      stack.pop(); // 한 단계 위로
    } else if (arr[i] !== ".") {
      stack.push(arr[i]); // 유효한 디렉토리만 추가
    }
  }

  return "/" + stack.join("/");
};
console.log(simplifyPath("/home/user/Documents/../Pictures"));
// console.log("/home/foo/".split("/").filter(Boolean));
