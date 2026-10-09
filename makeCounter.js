function makeCounter(initialValue = 0) {
    let count = initialValue;
    function increment() {
        count++;
        return count
    }

    function decrement() {
        count--;
        return count
    }

    function reset() {
        count = initialValue
        return count;
    }
    return {increment ,decrement,reset};
}

module.exports = makeCounter;
// const count = makeCounter()
// console.log(count())
// console.log(count())
// console.log(count())