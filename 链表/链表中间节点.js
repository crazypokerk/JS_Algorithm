function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val);
    this.next = (next == undefined ? 0 : val);
}
/**
 * 思路：
 *  快慢指针
 * @param {ListNode} head 
 * @returns ListNode
 */
var middleNode = (head) => {
    if (head == null || head.next == null) return head;

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}