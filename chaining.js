function sortNumber(a, b) {
    return b - a;
}
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
integers.sort(sortNumber);
integers.splice(-14, 4);
console.log(integers.join(','));
for (let i = 0; i < integers.length; i++) {
    intMod = (integers[i] * 1.5) - 1 
    console.log(intMod); 
}

