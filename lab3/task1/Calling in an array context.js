let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // all items of array will be displayed