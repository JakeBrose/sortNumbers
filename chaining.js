function sortNumber(a, b) {
    return b - a;
}
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
integers.sort(sortNumber);
console.log(integers.join(','));