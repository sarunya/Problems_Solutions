/**
 * Initialize your data structure here.
 */
 var WordDictionary = function() {
  this.trie = {};
};

/** 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let current = this.trie;
  for(let ch of word) {
      if(!current[ch]) {
          current[ch] = {};
      }
      current = current[ch];
  }
  current["isEnd"] = true;
};

WordDictionary.prototype._search = function (trie, word, index) {
  
  if(index==word.length && true && trie.isEnd==true) {
      return true;
  } else if(index==word.length) {
      return false;
  }
  let ch = word[index], result = false;
  if(trie[ch]) {
      result = this._search(trie[ch], word, index+1);
  }
  if(!result && ch==".") {
      //check any other index
      for(let key in trie) {
          if(key!=ch && this._search(trie[key], word, index+1)) {
              result = true;
              break;
          }
      }
  }
  return result;
}

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  return this._search(this.trie, word, 0);
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/