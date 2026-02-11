function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return confirm('Did parents allow you?');
    }
}

// same output, because if first return executes, second one will not be executed
// but if 'if' statement is false, second return will be executed no matter is there 'else' or not

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}