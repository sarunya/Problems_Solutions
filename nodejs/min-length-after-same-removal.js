/**
 * @param {string} s
 * @return {number}
 */
 var minimumLength = function(s) {
  let i=0, j=s.length-1;
  
  while(i<j) {
      if(s[i]!=s[j]) {
          break;
      }
      while(i<j && s[i]==s[i+1]) {
          ++i;
      }
      while(i<j && s[j]==s[j-1]) {
          --j;
      }
      ++i;
      --j;
  }
  if(i>j) {
      return 0;
  } else {
      return j-i+1;
  }
};