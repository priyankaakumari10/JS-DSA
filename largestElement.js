function findLargest(arr) {
  // your solution here
  let len = arr.length;
  let ans = Array.isArray(arr) && len > 0 ? arr[0] : null;
  for (let i = 0; i < len; i++){
    if (ans < arr[i]) {
      ans = arr[i];
    }
  }
  return ans;
}

module.exports = { findLargest };
