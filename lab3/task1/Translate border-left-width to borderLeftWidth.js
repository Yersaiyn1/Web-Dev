function camelize(str){
    let arr = str.split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
camelize("background-color");