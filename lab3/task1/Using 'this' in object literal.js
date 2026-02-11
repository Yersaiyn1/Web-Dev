function makeUser() {
    return {
        name: "John",
        ref: this // we can rewrite: ref() { return this; }
    };
}

let user = makeUser();

alert( user.ref.name ); // Error, use user.ref().name - this will work