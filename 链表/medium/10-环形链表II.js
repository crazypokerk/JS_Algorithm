/**
 * Leetcode:142
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head) return head;
    // Map
    // const map = new Map();
    // let cur = head, index = 0;
    // while (cur) {
    //     if (!map.has(cur)) {
    //         map.set(cur, index++);
    //         cur = cur.next;
    //     } else {
    //         break;
    //     }
    // }
    // return cur;

    //Set
    // const set = new Set();
    // while (head) {
    //     if (set.has(head)) {
    //         return head;
    //     }
    //     set.add(head);
    //     head = head.next;
    // }
    // return null;

    //快慢指针
    let slow = head, fast = head;
    while (1) {
        if (!fast || !fast.next) return null;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    fast = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};