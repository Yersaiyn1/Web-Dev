function random (min, max) {
    return Math.random() * (max - min) + min;
}
alert( random(1, 5) );