/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    let result = [];
    mat.map((arr, index) => {
      let count = 0;
      for(let val of arr) {
        if(val==0) {
          break;
        }
        ++count;
      }
      return [
        index,
        count
      ]
    })

    map.sort((a,b)=>a[1]-b[1]);

    while(k>0) {
      result.push(map[0]);
      --k;
    }
    return result;
};