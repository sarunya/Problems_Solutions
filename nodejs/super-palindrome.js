/**
 * Gets next palindrome from current palindrome number
 * @param {*} n 
 * @returns 
 */
var getNextPlaindrome = function(n) {
    let narr = (""+n).split("");
    let mid1 = Math.floor((narr.length)/2);
    let mid2 = mid1;
    if(narr.length%2==0) {
        mid1 -= 1;
    }
    
    let carry = 0;
    while(mid1>=0) {
        //plus one and grow outwards
        narr[mid1] = parseInt(narr[mid1]);
        narr[mid1] = (narr[mid1]+1)%10;
        narr[mid2] = narr[mid1];
        //if the value is greater than 0 (not 9 previously), then we reached the end
        if(narr[mid1]>0) {
            carry = 0;
            break;
        }
        carry = 1;
        --mid1
        ++mid2;
    }
    //case to handle all 99's
    if(carry==1 && mid1==-1) {
        narr.push(1);
        narr[0]=1;
    }
    return BigInt(narr.join(""));
     
}

/**
 * checks if num is palindrome
 * @param {*} num 
 * @returns 
 */
function isPalindrome(num) {
    let n = ""+num, i=0;
    let j=n.length-1;
    while(i<j){
        if(n[i]!=n[j]) {
            return false;
        }
        ++i; --j;
    }
    return true;
}

var superpalindromesInRange = function(left, right) {
    left = BigInt(left)
    right = BigInt(right)
    
    let leftsqrt = 1, count=0;
    
    while(leftsqrt*leftsqrt<right) {
        if(leftsqrt*leftsqrt>=left) {
            let res = leftsqrt*leftsqrt;
            if(isPalindrome(leftsqrt) && isPalindrome(res)) {
                ++count;
            }
        }
        leftsqrt = getNextPlaindrome(leftsqrt);
    }
    return count;

};