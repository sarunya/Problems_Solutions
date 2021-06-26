public class MinFlips {
  public int minFlips(String s) {
    int result = Integer.MAX_VALUE, n = s.length();
    //Step1 : As we are allowed to "Remove the character at the start of the string and append at the end"
    //we will double the string
    s = s+s;

    //Step2 : lets define two possibilites of outcomes
    char[] s1 = new char[2*n], s2 = new char[2*n];
    for(int i=0; i<s.length(); i++) {
      s1[i] = (i%2 == 0) ? "0": "1";
      s2[i] = (i%2 == 0) ? "1": "0";
    }

    //run through length of the string and calculate the difference by comparing s with s1 and s2
    int res1=0, res2=0;
    for(int i=0; i<s.length(); i++) {
      if(s.charAt(i)!=s1[i]) {
        ++res1;
      }
      if(s.charAt(i)!=s2[i]) {
        ++res2;
      }
      
      //we will have remove the first value
      if(i>=n) {
        if(s.charAt(i-n)!=s1[i-n]) {
          --res1;
        }
        if(s.charAt(i-n)!=s2[i-n]) {
          --res2;
        }
      }

      //count this for result
      if(i>=n-1) {
        result = Math.min(result, res1<res2?res1:res2);
      }

    }
    
    return result;
  }

}
