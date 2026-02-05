// var convert = function (s, numRows) {
//   if (numRows === 1) return s; // 예외 처리

//   let i = 0;
//   let arr = s.split("");
//   // [][] 를 만드려고함.
//   let brr = Array.from({ length: numRows }, () => []);
//   let j = 0;
//   let k = 0;

//   while (s.length !== i + 1) {
//     if (i < numRows) {
//       console.log("i:", i, "j:", j, "k:", k);
//       console.log("brr before:", brr);
//       brr[j][k] = arr[i];

//       j++;
//       i++;
//     } else if (i > numRows && i % (numRows - 1) !== 0) {
//       k++;
//       brr[j][k] = arr[i];
//       i++;
//     } else {
//       brr[j][k] = arr[i];
//       j++;
//       i++;
//       console.log("brr after:", brr);
//     }
//     if (s.length === i + 1) break;
//   }
//   return brr;
// };

var convert = function (s, numRows) {
  if (numRows === 1) return s; // 예외 처리

  let i = 0;
  let arr = s.split("");
  let brr = Array.from({ length: numRows }, () => []);
  let j = 0;
  let k = 0;
  let goingDown = true; // 방향 추적 추가

  while (i < s.length) {
    // 조건 단순화
    console.log("i:", i, "j:", j, "k:", k, "char:", arr[i]);

    brr[j][k] = arr[i];
    i++;

    // j 이동 로직 (당신의 if-else 대신 방향으로 제어)
    if (goingDown) {
      j++;
      if (j === numRows) {
        // 끝에 도달
        j = numRows - 2; // 한 칸 위로
        k++; // 다음 열로
        goingDown = false; // 방향 전환
      }
    } else {
      j--;
      k++;
      if (j === -1) {
        // 맨 위 도달
        j = 1; // 한 칸 아래로
        goingDown = true; // 방향 전환
      }
    }
  }

  console.log("brr:", brr);

  // 2차원 배열을 1차원 문자열로
  return brr.map((row) => row.join("")).join("");
};
console.log(convert("PAYPALISHIRING", 3));
