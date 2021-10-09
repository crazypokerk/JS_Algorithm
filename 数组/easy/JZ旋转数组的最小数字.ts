/**
 * 剑指offer11
 * @param numbers 
 * @returns 
 */

function minArray(numbers: number[]): number {
    let min: number = numbers[0];
    for (let i: number = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) min = numbers[i];
    }
    return min;
}