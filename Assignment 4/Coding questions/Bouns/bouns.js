let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let currentChar = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] != currentChar) {
        return prefix;
      }
    }
    prefix += currentChar;
  }
  return prefix;
};
console.log(longestCommonPrefix(strs));
