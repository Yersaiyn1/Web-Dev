function getMaxSubSum ( arr ) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let partialSum = 0;
        for (let j = i; j < arr.length; j++) {
            partialSum += arr[j];
            maxSum = Math.max(maxSum, partialSum);
        }
    }
    return maxSum;
}
alert( getMaxSubSum([-1, 2, 3, -9]) );