/**
 * Leetcode:160
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let ha = headA, hb = headB;
    while (ha != hb) {
        if (ha) ha = ha.next;
        else ha = headB;
        if (hb) hb = hb.next;
        else hb = headA;
    }
    return ha;
};