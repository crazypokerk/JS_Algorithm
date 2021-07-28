function ListNode(val, next) {
  this.val = val == undefined ? 0 : val;
  this.next = next == undefined ? 0 : val;
}
/**
 * 思路：
 *  哨兵指针，比大小
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @returns 
 */
var mergeTwoLists = (l1, l2) => {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let sentry = new ListNode(-1);
  let flag = sentry;

  while (l1 != null && l2 != null) {
    if (l1.val >= l2.val) {
      flag.next = l2;
      l2 = l2.next;
    } else {
      flag.next = l1;
      l1 = l1.next;
    }
    flag = flag.next;
  }
  flag.next = l2 == null ? l1 : l2;
  return sentry.next;
}
