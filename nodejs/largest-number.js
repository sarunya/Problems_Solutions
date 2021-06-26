/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
  let otherValues = false;
  nums.sort((a,b)=> {
    let as = parseInt(new String(a)+new String(b), 10)
    let bs = parseInt(new String(b)+new String(a), 10);
    if(a!=0 || b!=0) {
      otherValues = true;
    }
    return bs-as;
  })

  if(!otherValues) {
    return "0";
  }

  return nums.join("");
};