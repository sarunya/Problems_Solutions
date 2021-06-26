public class AddStrings {

    public String addStrings(String num1, String num2) {
      StringBuilder resStr = new StringBuilder();

      int i=num1.length()-1, j=num2.length()-1, carry = 0, val;

      while(i>=0 && j>=0) {
        val = Character.getNumericValue(num1.charAt(i--)) + Character.getNumericValue(num2.charAt(j--)) + carry;
        carry = Math.floorDiv(val, 10);
        val = val % 10;
        resStr.append(val);
      }

      while(i>=0) {
        val = Character.getNumericValue(num1.charAt(i--)) + carry;
        carry = Math.floorDiv(val, 10);
        val = val % 10;
        resStr.append(val);
      }

      while(j>=0) {
        val = Character.getNumericValue(num2.charAt(j--)) + carry;
        carry = Math.floorDiv(val, 10);
        val = val % 10;
        resStr.append(val);
      }

      if(carry > 0) {
        resStr.append(carry);
      }

      return resStr.reverse().toString();
    }

}
