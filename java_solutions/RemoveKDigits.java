import java.util.*;

public class RemoveKDigits {

  public String removeKdigits(String num, int k) {
    Deque<Integer> stack = new ArrayDeque<>();

    //for each values from 0 to length of string, push it to stack
    for(char ch : num.toCharArray()) {
      int val = Character.getNumericValue(ch);
      //if stack is empty, add the value to stack
      if(stack.isEmpty()) {
        stack.push(val);
      } else {
        //check if top is stack is greater than current value
        //if yes, pop it from stack
        while(k>0 && !stack.isEmpty() && stack.peek() > val) {
          stack.pop();
          k--;
        }
        stack.push(val);
      }
    }

    while(!stack.isEmpty() && k>0) {
      stack.pop();
      --k;
    }

    StringJoiner strb = new StringJoiner("");

    Iterator<Integer> iterator = stack.descendingIterator();
    boolean isLeadingZero = true;

    while(iterator.hasNext()) {
      int val = iterator.next();
      //remove leading zeroes
      if(isLeadingZero && val==0) {
        continue;
      } else if(isLeadingZero) {
        isLeadingZero = false;
      }
      strb.add(String.valueOf(val));
    }

    if(isLeadingZero) {
      return "0";
    }

    return strb.toString();
  }


  public static void main(String[] args) {
    RemoveKDigits obj = new RemoveKDigits();
    String answer = "10";
    
    while(answer.length()>0) {
      answer = obj.removeKdigits(answer, 2);
      System.out.println(answer);
    }
  }
}