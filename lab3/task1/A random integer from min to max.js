function randomInteger (min, max) {
    let x = Math.random() * (max - min + 1) + min - 0.5;
    return Math.round(x);
}
alert( randomInteger(1, 5) );