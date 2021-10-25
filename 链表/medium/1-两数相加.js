/**
 * Leetcode:2
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(-1);
    let cur = result;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        curNum = sum % 10;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(curNum);
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
        cur = cur.next;
    }
    return result.next;
};