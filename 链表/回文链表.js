function ListNode(val, next) {
    this.val = (val == undefined ? 0 : val);
    this.next = (next == undefined ? 0 : val);
}

/*
    思路：
        1、定义快慢指针(slow,fast)以及标记指针(prev)；
        2、慢指针一次一步，快指针一次两步，当快指针及快指针下一个节点为空时结束，此时慢指针会处在链表中间节点的后节点上；
        3、在prev处断开链表；
        4、反转链表后半部分；
        5、对比前后两部分。
*/
const isPalindrome = (head) => {
    if (head == null || head.next == null) {
        return true;
    }

    let prev, head2;
    let slow = head, fast = head;

    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    while (slow != null) {
        const tmp = slow.next;
        slow.next = head2;
        head2 = slow;
        slow = tmp;
    }

    while (head && head2) {
        if (head.val != head2.val) {
            return false;
        }
        head = head.next;
        head2 = head2.next;
    }

    return true;
}