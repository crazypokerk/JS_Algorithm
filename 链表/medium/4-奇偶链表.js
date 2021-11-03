/**
 * Leetcode:328
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) return head;
    let odd = head;
    let evenNode = head.next, even = evenNode;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenNode;
    return head;
};