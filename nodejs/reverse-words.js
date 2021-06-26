/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  s = s.replace(/\s+/g, " ");
  s = s.trim().split(" ").reverse();
  return s.join(" ");
};