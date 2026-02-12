/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const value = [];
  let i = 0;
  let current = head;
  while (current !== null) {
    value.push(current.val);
    current = current.next;
  }
  // k개씩 뒤집기
  for (let i = 0; i < value.length; i += k) {
    // k개 그룹이면 뒤집기
    if (i + k <= value.length) {
      // slice로 잘라서 reverse
      const part = value.slice(i, i + k).reverse();

      // 다시 넣기
      for (let j = 0; j < k; j++) {
        value[i + j] = part[j];
      }
    }
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
const list = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(reverseKGroup(list, 3)));
