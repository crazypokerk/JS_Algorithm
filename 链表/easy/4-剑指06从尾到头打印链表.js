/**
 * 剑指Offer06
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let pre = null, cur = head;
    let result = [];
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    while (pre) {
        result.push(pre.val);
        pre = pre.next;
    }
    return result;
};