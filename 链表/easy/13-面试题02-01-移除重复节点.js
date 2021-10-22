/**
 * 面试题02.01移除重复节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    if(!head) return head;
    const exist = new Set();
    let p = head;
    exist.add(head.val);
    while(p.next) {
        let cur = p.next;
        if(exist.has(cur.val)) {
            p.next =p.next.next;
        } else {
            exist.add(cur.val);
            p = p.next;
        }
    }
    return head;
};