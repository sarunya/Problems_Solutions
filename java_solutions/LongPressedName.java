public class LongPressedName {
  public boolean isLongPressedName(String name, String typed) {
    boolean isLongPressed = true;

    //run through length of name
    int i=0, j=0;
    while(i<name.length()) {
      int curCharCount = 1;
      while(i<name.length()-1 && name.charAt(i)==name.charAt(i+1)) {
        ++i;
        ++curCharCount;
      }

      //get char count in typed
      while(j<typed.length() && typed.charAt(j)==name.charAt(i)) {
        ++j;
        --curCharCount;
      }

      if(curCharCount>0) {
        isLongPressed = false;
        break;
      }

      ++i;
    }

    return isLongPressed;
  }

  public static void main(String[] args) {
    
  }
}