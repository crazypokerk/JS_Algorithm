/**
 * 坏字符
 * @param {String} modelStr 
 * @returns 
 */
const badString = (modelStr) => {
    const SIZE = 256;
    let index = [];
    for (let i = 0; i < SIZE; i++) {
        index[i] = -1;
    }
    for (let i = 0; i < modelStr.length; i++) {
        let unicode = modelStr.charCodeAt(i);
        index[unicode] = i;
    }
    return index;
}
var ind = modelString('abd');
console.log(ind);

const BoverMoore = () => {

}