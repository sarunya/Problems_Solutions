public class RedistributeCharacters {

  public boolean makeEqual(String[] words) {
        //run through all word in words
        int[] charr = new int[26];
        
        for(String str: words) {
          for(char ch: str.toCharArray()) {
            ++charr[ch-'a'];
          }
        }

        for(int val:charr) {
          if(val%words.length!=0) {
            return false;
          }
        }

        return true;
  }

  public static void main(String[] args) {

  }
}
