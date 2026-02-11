function sumInput() {
    let numbers = [];
    while (true) {
        let x = prompt("Enter a number", 0);
        if (x === '' || x === null || x !== isFinite(x)) break;
        numbers.push(+x);
    }
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}
alert( sumInput() );