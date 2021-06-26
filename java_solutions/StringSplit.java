import java.math.BigInteger;
import java.util.LinkedList;

public class StringSplit {

  public String preProcess(String s) {
    int i=0, j=0;
    char[] ch = s.toCharArray();
    while(j<ch.length) {
      ch[i] = ch[j];
      ++j;
      ++i;
      while(j>0 && j<ch.length && ch[j]=='0' && ch[j]==ch[j-1]) {
        ++j;
      }
    }
    return String.valueOf(ch).substring(0, i);
  }

  public boolean isSplitPossible(String s, int index, LinkedList<BigInteger> result) {
    if(index == s.length()) {
      return false;
    }
    BigInteger oneBI = new BigInteger("1");
    for(int i=index; i<s.length(); i++) {
      String substr = s.substring(index, i+1);
      BigInteger currentInteger = new BigInteger(substr);
      
      if(result.isEmpty() || result.peekLast().subtract(currentInteger).equals(oneBI)) {
        result.add(currentInteger);
        boolean isPossible = result.size()>1;

        if(i+1<s.length()) {
          isPossible = isSplitPossible(s, i+1, result);
        }

        if(isPossible) {
          return true;
        }

        result.removeLast();
      }
    }
    return false;
  }

  public boolean splitString(String s) {
      s = this.preProcess(s);
      System.out.println("preprocessed "+s );
      LinkedList<BigInteger> result = new LinkedList<>();
      return this.isSplitPossible(s, 0, result);
  }

  public static void main(String[] args) {
    StringSplit obj = new StringSplit();
    System.out.println(obj.splitString("32028723363202872336"));
    System.out.println(obj.splitString("1234"));
    System.out.println(obj.splitString("050043"));
    System.out.println(obj.splitString("9080701"));
    System.out.println(obj.splitString("200100"));
  }
}