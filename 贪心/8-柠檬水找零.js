/**
 * Leetcode:860
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const pocket = new Map();
    pocket.set(5, 0);
    pocket.set(10, 0);
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) pocket.set(5, pocket.get(5) + 1);
        if (bills[i] == 10) {
            let remainder = pocket.get(5);
            if (remainder != 0) {
                pocket.set(5, pocket.get(5) - 1);
                pocket.set(10, pocket.get(10) + 1);
            }
            else return false;
        }
        if (bills[i] == 20) {
            if (pocket.get(10) != 0 && pocket.get(5) != 0) {
                pocket.set(5, pocket.get(5) - 1);
                pocket.set(10, pocket.get(10) - 1);
            } else if (pocket.get(5) >= 3) {
                pocket.set(5, pocket.get(5) - 3);
            } else {
                return false;
            }
        }
    }
    return true;
};