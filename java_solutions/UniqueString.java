import java.util.Arrays;
import java.util.List;

public class UniqueString {

  public void preProcess(List<String> arr) {
    for(String word : arr) {
      int[] charr = new int[26];
      for(int i=0; i<word.length(); i++) {
        ++charr[word.charAt(i)];
        if(charr[word.charAt(i)]>1) {
          arr.remove(word);
          break;
        }
      }
    }
  }

  public int[] getIntArray(int[] exarr, String word) {
    int[] charr = Arrays.copyOf(exarr, exarr.length);
    for(int i=0; i<word.length(); i++) {
      ++charr[word.charAt(i)];
    }
    return charr;
  }
      
  public int maxLength(List<String> arr) {
    //pre process and remove the string from list, if it has duplicates
    preProcess(arr);
    for(int i=0; i<arr.size(); i++) {
      int[] charr = this.getIntArray(arr.get(i));
      for(int j=i+1; j<arr.size(); j++) {

      }
    }
  }
  public static void main(String[] args) {
    UniqueString obj = new UniqueString();
  }
}
