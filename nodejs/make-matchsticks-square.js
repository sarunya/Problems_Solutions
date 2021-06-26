/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {

    let sumv = 0;
    for(let val of matchsticks) {
      sumv += val;
    }

    if(sumv%4!=0) {
      return false;
    } else {
      let ans = [0, 0, 0, 0];
      let side = sumv/4;
      if(findSplit(matchsticks, 0, ans, side)) {
        return true;
      }
      return false;
    }
};

function findSplit(matchsticks, index, ans, side) {
  if(index>=matchsticks.length || ans[0]>side || ans[1]>side || ans[2]>side || ans[3]>side) {
    return false;
  } else {
    let result = false;
    for(let i=0; i<3; i++) {
      if(ans[i]+matchsticks[index]<=side) {
        ans[i] += matchsticks[index];

        if(index==matchsticks.length-1 && ans[0]==side && ans[1]==side && ans[2]==side && ans[3]==side) {
          result = true;
          break;
        }

        if(index!=matchsticks.length-1 && findSplit(matchsticks, index+1, ans, side)) {
          result = true;
          break;
        }

        ans[i] -= matchsticks[index];
      }
    }
    return result;
  }
}


//[5,5,5,5,4,4,4,4,3,3,3,3]

//3,3,3,3,4,4,4,4,5,5,5,5