//（1）数组取值用 '[]'，调用方法用 '()'
let array = ['a', 'b', 'c'];
array[1];
let obj = { 'a': 1, 'b': 2 };
obj.a;
obj['a'];
array.push();

//（2）无论条件是否满足都会执行 i++
if (a[i++] > 0) { } else { }

//（3）等于和严格等于
console.log(a == b);
console.log(a === b);
// 普通相等 == 不能区分 0 和 false
// 0 -> (number) false => (boolean)
console.log(0 == false);  // true
// '' -> (string)
// undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型
// 八大将： number-bright-string-boolean-null-undefined-object-symbol
// 普通相等 == 也不能区分空字符 '' 和 false
console.log('' == false); // true
// 严格等于不会进行类型转换
console.log(undefined == null); // true
console.log(undefined === null); // false

//（4）当使用数学表达式或其他比较方法时 ： < > <= >=
// null/undefined 会被转化为数字 null -> 0  undefined -> NaN(Not a Number)
// 双等于 == 和 普通比较符 < > <= >= 代码逻辑相互独立
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null > 0);  // false
console.log(null > 0);  // false

//(6)判空和判不空
if (val) { }   // 不为空执行
if (!val) { }  // 为空执行


//（7）forEach(); 无法使用 return 语句和 break 语句终止循环
// 想要终止循环只能使用 try catch 捕获异常终止 forEach
try {
    [...string].forEach(i => {
        throw new Error('');
    });
} catch (error) {
    return false;
}

//（8）字符串无法直接操作更改
// 错误做法：
let str = 'abcde';
str[3] = 'x';
// Uncaught ReferenceError: Invalid left-hand side in assignment

//（9）map() 方法中的回调函数必须 return 操作后的元素，不然返回的就是 undefined
// 这是因为 map() 方法创建了一个新的数组
const arr = arr.map(item => {
    return item * 2;
});

// 写交换数组元素的的外部函数，要传入交换的数组，不然怎么交换元素？这种问题有点儿弱智了，竟然还会出现o(╥﹏╥)o
const swap = (a, b) => {
    let tmp = a;
    a = b;
    b = tmp;
}
// 以上写法不会交换数组元素 (!!!)

// 警惕数组越界后值的读取，会报：
//  Uncaught TypeError: Cannot read properties of undefined (reading 'x')

// 双感叹号
!!1 // true
!!0 // false
!!'' // false
!!undefined // false