function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
/**
 * 138.复制带随机指针的链表
 * 同剑指Offe35
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return head;
    let hash = new Map();
    let tmp = head;
    while (tmp) {
        hash.set(tmp, new Node(tmp.val, null, null));
        tmp = tmp.next;
    }
    tmp = head;
    while (tmp) {
        hash.get(tmp).next = tmp.next ? hash.get(tmp.next) : null;
        hash.get(tmp).random = tmp.random ? hash.get(tmp.random) : null;
        tmp = tmp.next;
    }
    return hash.get(head);
};