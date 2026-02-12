/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// ListNode 정의
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 배열 → LinkedList 변환
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// LinkedList → 배열 변환 (출력용)
function listToArray(head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }
  return dummy.next;
};

const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);
const result = mergeTwoLists(list1, list2);
console.log(listToArray(result));
