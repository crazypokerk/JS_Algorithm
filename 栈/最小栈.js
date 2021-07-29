/**
 * 思路：
 *  辅助栈存放最小值
 */

var MinStack = () => {
    this.stack = [];
    this.min_stack = [Infinity];
}

MinStack.prototype.push = (val) => {
    this.stack.push(val);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val));
}

MinStack.prototype.pop = () => {
    this.stack.pop();
    this.min_stack.pop();
}

MinStack.prototype.top = () => {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = () => {
    return this.min_stack[this.min_stack.length - 1];
}