function ucFirst(str) {
    let string = '';
    string += str.at(0).toUpperCase();
    string += str.slice(1);
    return string;
}