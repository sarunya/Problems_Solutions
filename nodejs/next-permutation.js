/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    //traverse from right to find number lesser than next number
    let i=nums.length-2, found=-1;
    while(i>=0){
      if(nums[i]<nums[i+1]){
        found = i;
        break;
      }
      --i;
    }

    if(found>=0) {
      //now find smallest number greater than found towards right of found
      let nextIndex = getNextGreaterNumber(nums, nums[found], found+1);
      swap(nums, found, nextIndex);
      // console.log(found, nextIndex, nums);
    }

    reverse(nums, found+1);
    // console.log(nums);
};

function getNextGreaterNumber(nums, target, found) {
  while(found<nums.length) {
    if(nums[found]<=target) {
      break;
    }
    ++found;
  }
  return found-1;
}

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

var reverse = function(nums, start) {
  let end = nums.length-1;
  while(start<end) {
    swap(nums, start, end);
    ++start;
    --end;
  }
}




nextPermutation([4,2,0,2,3,2,0]);
nextPermutation([5,3,4,9,7,6]);