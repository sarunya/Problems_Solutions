/**
 * @param {string[]} strs
 * @return {number}
 */
//TODO
 var minDeletionSize = function(strs) {
    strs = getCharArrays(strs);

    let ci=0, i=0, n;

    while(i<strs[0].length) {
      strs[0][ci] = strs[0][i];
      let duplicate = false;

      for(let j=1; j<strs.length; j++) {

        if(strs[j-1].join("") > strs[j].join("")) {
          //delete current i by just incrementing i and not ci
          ++i;
          break;
        } else if(strs[j-1].join("") == strs[j].join("")) {
          duplicate = true;
        }

      }
      
    }
};

function getCharArrays(strs) {
  let arr = [];
  for(let str of strs) {
    arr.push(str.split(""));
  }
  return arr;
}