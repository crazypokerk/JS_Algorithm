/**
 * Leetcode:725
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    if (!head) return new Array(k).fill(null);
    let count = 0, tmp = head;
    while (tmp) {
        count++;
        tmp = tmp.next;
    }
    const part = new Array(k).fill(null);
    let cur = head;
    let subSize = Math.floor(count / k), remain = count % k;
    for (let i = 0; i < k && cur; i++) {
        part[i] = cur;
        let partLen = subSize + (i < remain ? 1 : 0);
        for (let j = 1; j < partLen; j++) {
            cur = cur.next;
        }
        let next = cur.next;
        cur.next = null;
        cur = next;
    }
    return part;
};