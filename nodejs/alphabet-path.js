/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let alphabetVal = [];
    for(let i=0; i<26; i++) {
      let x = Math.floor(i/5);
      let y = i%5;
      alphabetVal[i] = [x, y];
    }

    // console.log(alphabetVal);

    let result = [];
    let initCharCode = "a".charCodeAt(0);
    let currentPosition = [...alphabetVal[0]], targetPosition;
    for(let ch of target) {
      ch = ch.charCodeAt(0)-initCharCode;
      targetPosition = [...alphabetVal[ch]];
      console.log(currentPosition, targetPosition, ch);

      while(currentPosition[0]<targetPosition[0] && currentPosition[0]<4) {
        result.push("D");
        ++currentPosition[0];
      }
      while(currentPosition[0]>targetPosition[0]) {
        result.push("U");
        --currentPosition[0];
      }
      while(currentPosition[1]<targetPosition[1]) {
        result.push("R");
        ++currentPosition[1];
      }
      while(currentPosition[1]>targetPosition[1]) {
        result.push("L");
        --currentPosition[1];
      }
      if(targetPosition[0]==5 && currentPosition[0]==4) {
          result.push("D");
      }
      result.push("!");
      currentPosition = targetPosition;
    }
    return result.join("");
};


result = alphabetBoardPath("zdz")
console.log(result);