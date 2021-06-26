import java.util.Arrays;

public class BalancedParanthesis {

  public static String minRemoveToMakeValid(String s) {

    int open= 0, close= 0, i= 0, j= 0;
    char[] sarr = s.toCharArray();

    //loop with j from 0 to end of string s
    while(j<sarr.length) {
      //copy j to i, if j is balanced
      if(sarr[j]=='(') {
        //if it is open, put open right away to string and increment open
        sarr[i++] = sarr[j];
        ++open;
      } else if(sarr[j]==')') {
        //if it is closed, and there is an open earlier, then arr
        if(open>0) {
          sarr[i++] = sarr[j];
          --open;
        }
      } else {
        sarr[i++] = sarr[j];
      }
      ++j;
    }


    int length = i;
    --i;
    j=i;
    //loop with j from 0 to end of string s
    while(j>=0) {
      //copy j to i, if j is balanced
      if(sarr[j]==')') {
        //if it is open, put open right away to string and increment open
        sarr[i--] = sarr[j];
        ++close;
      } else if(sarr[j]=='(') {
        //if it is closed, and there is an open earlier, then arr
        if(close>0) {
          sarr[i--] = sarr[j];
          --close;
        }
      } else {
        sarr[i--] = sarr[j];
      }

      --j;
    }

    char[] result = Arrays.copyOfRange(sarr, i+1, length);

    return String.valueOf(result);
  }

  public static void main(String[] args) {
    System.out.println(minRemoveToMakeValid("lee(t(c)o)de)"));
  }
}
