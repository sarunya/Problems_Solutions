/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
  let result = [];
  _getResult(s, 0, result);
  return result;
};

var transform = function(str, index) {
  let character = str[index];
  if(str[index].toUpperCase() == str[index]) {
      character = str[index].toLowerCase();
  } else {
      character = str[index].toUpperCase()
  }
  return str.substring(0,index)+ character +str.substring(index+1)
}

function _getResult(str, index, result) {
  // console.log(str, index, result);
  if(index>=str.length) {
      result.push(str);
  } else {
      while(index<str.length && "0123456789".indexOf(str[index])>=0) {
          ++index;
      }
      _getResult(str, index+1, result);
      if(index<str.length) {
          _getResult(transform(str, index), index+1, result);
      }
  }
}