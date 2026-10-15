function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("hello")); 

const reverse = (str) => [...str].reduce((acc, ch) => ch + acc, "");

function reverseRec(str) {
  if (str === "") return "";
  return reverseRec(str.slice(1)) + str[0];
}