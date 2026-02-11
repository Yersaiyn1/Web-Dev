function filterRange(arr, a, b) {
    let res = [];
    for (let item of arr) {
        if (item >= a && item <= b) {
            res.push(item);
        }
    }
    return res;
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);