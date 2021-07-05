/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    let map = new Map(), result = [];

    let i = 0, j = 10;

    while(j<=s.length) {

      let subs = s.substring(i, j);
      if(map.has(subs) && map.get(subs)==1) {
        result.push(subs);
        map.set(subs, 2);
      } else if(!map.has(subs)) {
        map.set(subs, 1);
      }
      ++i;
      ++j;
    }

    return result;

};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));