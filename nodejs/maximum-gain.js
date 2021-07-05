/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let stack = [], len = -1;

    let str = (x>y) ? "ab" : "ba";
    let val = (x>y) ? x : y;
    let res1 = 0;

    //parse all characters in s
    for(let ch of s) {
      //if this character is second character of str, then check top of stack
      if(ch==str[1] && (len>=0 && stack[len]==str[0])) {
        res1 += val;
        stack.pop();
        --len;
      } else {
        stack.push(ch);
        ++len;
      }
    }
    s = stack;
    stack = [];
    len = -1;
    //for remaining characters in stack, pop and check str2
    str = (str=="ab") ? "ba" : "ab";
    val = (val==x) ? y : x;
    for(let ch of s) {
      //if this character is second character of str, then check top of stack
      if(ch==str[1] && (len>=0 && stack[len]==str[0])) {
        res1 += val;
        stack.pop();
        --len;
      } else {
        stack.push(ch);
        ++len;
      }
    }

    return res1;

};


let res = maximumGain("aabbrtababbabmaaaeaabeawmvaataabnaabbaaaybbbaabbabbbjpjaabbtabbxaaavsmmnblbbabaeuasvababjbbabbabbasxbbtgbrbbajeabbbfbarbagha", 8484, 4096);
console.log("result is ", res);

// res = maximumGain("aabbaaxybbaabb", 5, 4);
// console.log("result is ", res);


//"aabbrtababbabmaaaeaabeawmvaataabnaabbaaaybbbaabbabbbjpjaabbtabbxaaavsmmnblbbabaeuasvababjbbabbabbasxbbtgbrbbajeabbbfbarbagha"
// 8484
// 4096