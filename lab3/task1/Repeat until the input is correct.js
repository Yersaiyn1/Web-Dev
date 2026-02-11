while(true){
    let answer = prompt('Enter any number: ', 0);
    if (answer === '' || answer === null){
        break;
    } else {
        if (answer > 100){
            break;
        }
    }
}