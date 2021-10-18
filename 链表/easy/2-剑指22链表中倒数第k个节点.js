/**
 * 剑指Offer22
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    // let tmp = head, count = 0;
    // while (tmp) {
    //     count++;
    //     tmp = tmp.next;
    // }
    // tmp = head;
    // for (let i = 0; i < count - k; i++) {
    //     tmp = tmp.next;
    // }
    // return tmp;
    let slow = head, fast = head;
    while (fast && k > 0) {
        k--;
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};