/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {

  let {minSentence, maxSentence} = getSentenceByLength(sentence1, sentence2);

  let i = 0, j = maxSentence.length-1;
  let mini = 0, minj = minSentence.length-1;

  while(mini<=minj) {
    //then that is the last word of the sentence for odd length
    if(maxSentence[i]==minSentence[mini]) {
      ++i;
      ++mini;
    } else if(maxSentence[j]==minSentence[minj]) {
      --j;
      --minj;
    } else {
      return false;
    }
  }

  return true;

};

function getSentenceByLength() {
  let minSentence, maxSentence;
  if(sentence1.length > sentence2.length)  {
    minSentence = sentence2;
    maxSentence = sentence1;
  } else {
    minSentence = sentence1;
    maxSentence = sentence2;
  }
  return {maxSentence, minSentence};
}