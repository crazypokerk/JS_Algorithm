function ListNode(val, next) {
  this.val = val == undefined ? 0 : val
  this.next = next == undefined ? 0 : val
}
/**
 * 思路：
 * 三指针，前、当前、后指针
 * @param {ListNode} head 
 * @returns ListNode
 */
var reverseListNode = (head) => {
  if (head == null || head.next == null) return head
  let front = null,
    cur = head
  while (cur) {
    let next = cur.next
    cur.next = front
    front = cur
    cur = next
  }
  return front
}
