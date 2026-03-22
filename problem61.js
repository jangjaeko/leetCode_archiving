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
var rotateRight = function (head, k) {
  // 엣지 케이스: 빈 리스트, 노드 1개, k=0
  if (!head || !head.next || k === 0) return head;

  // 1단계: 길이 구하고 tail 찾기
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }

  // 2단계: 원형 연결
  tail.next = head;

  // 3단계: 새 꼬리 위치 계산
  k = k % len;
  if (k === 0) {
    tail.next = null; // 회전 불필요
    return head;
  }
  let steps = len - k - 1;

  // 4단계: 새 꼬리까지 이동
  let newTail = head;
  for (let i = 0; i < steps; i++) {
    newTail = newTail.next;
  }

  // 5단계: 연결 끊기 & 새 head 반환
  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
