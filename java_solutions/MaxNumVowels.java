class MaxNumVowels {

  public boolean isVowel(char s) {
    return s=='a' || s=='e' || s=='i' || s=='o' || s=='u';
  }
  public int maxVowels(String s, int k) {
    int countNow = 0, result = 0;

    //for each character in string
    for(int i=0; i<s.length(); i++) {
      if(i>=k && isVowel(s.charAt(i-k))) {
        --countNow;
      }
      if(isVowel(s.charAt(i))) {
        ++countNow;
      }
      result = Math.max(countNow, result);
    }

    return Math.max(countNow, result);
  }
}