/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head); // 더미 노드
  let first = dummy;
  let second = dummy;

  // first 포인터를 n+1만큼 이동
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  // first가 null이 될 때까지 first와 second를 함께 이동
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // second가 가리키는 노드의 다음 노드를 삭제
  second.next = second.next.next;
  return dummy.next; // 더미 노드의 다음이 새로운 head
};

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
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
};

// ✅ 올바른 테스트
const list = arrayToList([1, 2, 3, 4, 5]);
const result = removeNthFromEnd(list, 2);
console.log(listToArray(result)); // [1, 2, 3, 5] ✅
