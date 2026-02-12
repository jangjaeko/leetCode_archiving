/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 모든 값을 배열에 모으기
  const values = [];

  for (let list of lists) {
    let current = list;
    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }
  }

  // 정렬
  values.sort((a, b) => a - b);

  // 새 리스트 만들기
  let dummy = new ListNode(0);
  let current = dummy;

  for (let val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

// 테스트 1
const lists1 = [
  arrayToList([1, 4, 5]),
  arrayToList([1, 3, 4]),
  arrayToList([2, 6]),
];
console.log(listToArray(mergeKLists(lists1)));
// [1, 1, 2, 3, 4, 4, 5, 6] ✅

// 테스트 2
console.log(listToArray(mergeKLists([])));
// [] ✅

// 테스트 3
console.log(listToArray(mergeKLists([[]])));
// [] ✅
