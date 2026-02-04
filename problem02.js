// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// var addTwoNumbers = function (l1, l2) {
//   //   const num1 = l1.toString().replace(/,/g, "").split("").reverse().join("");
//   //   const num2 = l2.toString().replace(/,/g, "").split("").reverse().join("");
//   //   const sum = Number(num1) + Number(num2);
//   //   const newArr = sum.toString().split("").reverse();
//   //   return newArr;
//   let dummy = new ListNode(0); // 더미 노드
//   let current = dummy;
//   let carry = 0; // 올림수

//   while (l1 !== null || l2 !== null || carry > 0) {
//     const val1 = l1 ? l1.val : 0;
//     const val2 = l2 ? l2.val : 0;

//     const sum = val1 + val2 + carry;
//     carry = Math.floor(sum / 10); // 다음 자리로 올림
//     current.next = new ListNode(sum % 10); // 현재 자리 숫자

//     current = current.next;
//     if (l1) l1 = l1.next;
//     if (l2) l2 = l2.next;
//   }

//   return dummy.next;
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([0], [0]));

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // 더미 노드
  let current = dummy;
  let carry = 0; // 올림수

  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10); // 다음 자리로 올림
    current.next = new ListNode(sum % 10); // 현재 자리 숫자

    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

// ========== 테스트 헬퍼 함수 ==========

// 배열 → ListNode 변환
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// ListNode → 배열 변환 (출력용)
function listToArray(node) {
  const arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

// ========== 테스트 ==========

const l1 = arrayToList([2, 4, 3]); // 342
const l2 = arrayToList([5, 6, 4]); // 465
const result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // [7, 0, 8] → 807

const l3 = arrayToList([0]);
const l4 = arrayToList([0]);
const result2 = addTwoNumbers(l3, l4);
console.log(listToArray(result2)); // [0]

const l5 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
const l6 = arrayToList([9, 9, 9, 9]);
const result3 = addTwoNumbers(l5, l6);
console.log(listToArray(result3)); // [8,9,9,9,0,0,0,1]
