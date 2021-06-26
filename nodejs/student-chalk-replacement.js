/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
 var chalkReplacer = function(chalk, k) {
    //find sum of chalk
    let chalkSum = 0;
    for(let c of chalk) {
      chalkSum += c;
    }

    chalkSum = chalkSum % k;

    for(let i=0; i<chalk.length; i++) {
      if(chalkSum>=chalk[i]) {
        chalkSum -= chalk[i];
      } else {
        return i;
      }
    }
};

//5,1,5

//sum: 11

//22%11=0

//3,4,1,2

//sum: 10
//25%10 = 5
//