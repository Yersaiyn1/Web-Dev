function readNumber() {
    let x;
    do {
        x = prompt('Enter a number', 0);
    } while (!isFinite(x));
    if (x === null || x === '') return null;
    return +x;
}
alert( `Number: ${readNumber()}` );