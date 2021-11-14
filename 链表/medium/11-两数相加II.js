/**
 * Leetcode:445
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1 = reverse(l1);
    let l2 = reverse(l2);

    const result = new ListNode(-1);
    let cur = result;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const sum = v1 + v2 + carry;
        let val = sum % 10;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(val);
        cur = cur.next;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
    }
    return reverse(result.next);
};
var reverse = head => {
    if (!head) return head;
    let pre = null, cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

var addTwoNumbers1 = (l1, l2) => {
    const s1 = [], s2 = [];
    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    const result = null;
    let cur = result;
    let carry = 0;
    while (s1.length != 0 || s2.length != 0 || carry > 0) {
        const v1 = s1.length === 0 ? 0 : s1.pop();
        const v2 = s2.length === 0 ? 0 : s2.pop();
        let curSum = v1 + v2 + carry;
        let val = curSum % 10;
        carry = Math.floor(curSum / 10);
        const tmp = new ListNode(val);
        tmp.next = cur;
        cur = tmp;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
    }
    return cur;
}