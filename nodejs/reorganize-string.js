/**
 * @param {string} s
 * @return {string}
 */
 var reorganizeString = function(s) {
  let hash = new Array(26).fill(0), isPossible = 0;

  for(let i=0; i<s.length; i++) {
    let code = s.codePointAt(i) - 97;
    ++hash[code];
    isPossible = (hash[code] > isPossible) ? hash[code] : isPossible;
  }
  
  if(isPossible > Math.ceil(s.length/2)) {
    return "";
  }

  s = s.split("");
  let i = 0;
  while(i<s.length) {
    let maxCode = -1, maxValue = 0, secondCode = -1, secondMax = 0;

    for(let j=0; j<26; j++) {
      if(maxValue<hash[j]) {
        if(secondCode!=-1) {
          secondCode = maxCode;
          secondMax = maxValue;
        }
        maxValue = hash[j];
        maxCode = j;
      } else if(secondMax<hash[j]) {
        secondCode = j;
        secondMax = hash[j];
      }
    }

    --hash[maxCode]
    s[i++] = String.fromCharCode(maxCode+97)
    if(secondCode!=-1) {
      s[i++] = String.fromCharCode(secondCode+97)
      --hash[secondCode]
    }
  }

  return s.join("");
};


// let result = reorganizeString("abscdfabsabsabababaaaaaa")
// console.log(result);