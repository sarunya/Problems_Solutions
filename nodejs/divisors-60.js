/**
 * @param {number[]} time
 * @return {number}
 */
//TODO
 function sumN(n) {
  return (n*(n+1))/2;
}

var numPairsDivisibleBy60 = function(time) {
  let divisors = new Map();
  
  for(let t of time) {
    let val = 1;
    if(divisors.has(t%60)) {
      val += divisors.get(t%60);
    }
    divisors.set(t%60, val);
  }
  
  let ans = sumN(divisors[0]-1);
  ans+=sumN(divisors[30]-1);
  
  for(let i=1; i<=29; i++) {
      ans += (divisors[i]*divisors[60-i])
  }
  return ans;
};