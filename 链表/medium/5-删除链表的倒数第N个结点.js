/**
 * Leetcode:19
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (!head) return head;
    const stack = [];
    const sub = new ListNode(-1);
    sub.next = head;
    let cur = sub;
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    for (let i = 0; i < n; i++) stack.pop();
    let tmp = peek(stack);
    tmp.next = tmp.next.next;
    return sub.next;
};
function peek(stack) {
    return stack[stack.length - 1];
}