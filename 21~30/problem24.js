/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const value = [];

  let current = head;
  while (current !== null) {
    value.push(current.val);
    current = current.next;
  }
  let i = 0;
  while (i < value.length - 1) {
    let temp = 0;
    temp = value[i];
    value[i] = value[i + 1];
    value[i + 1] = temp;
    i = i + 2;
  }
  let dummy = new ListNode(0);
  current = dummy;
  for (let val of value) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next; // 일단 head 반환
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
const list = arrayToList([1, 2, 3, 4]);
console.log(listToArray(swapPairs(list)));
