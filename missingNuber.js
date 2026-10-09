function findMissingNumber(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError("Input must be an array of numbers");
    }

    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

module.exports = findMissingNumber;