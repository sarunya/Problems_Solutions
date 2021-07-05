/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  let map = new Map();
  let set = new Set();
  
  s = s.split(" ");

  if(pattern.length != s.length) {
    return false;
  }

  for(let i=0; i<pattern.length; i++) {
      if(!map.has(s[i]) && !set.has(pattern[i])) {
        //then add it to map
        map.set(s[i], pattern[i]);
        set.add(pattern[i]);
      } else if(!map.has(s[i]) || !set.has(pattern[i])) {
        return false;
      } else if(map.get(s[i])!=pattern[i]) {
        return false;
      }
  }
  return true;
  
};

let pattern = "abba"
let s = "dog cat cat dog"
result = wordPattern(pattern, s);
console.log(result);