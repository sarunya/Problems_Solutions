import java.util.Stack;

public class ReversePolishNotation {

  public static void main(String[] args) {
    ReversePolishNotation obj = new ReversePolishNotation();

    String[] tokens = new String[] { "2", "1", "+", "3", "*" };
    System.out.println("" + obj.evalRPN(tokens));
  }

  public boolean isSymbol(String token) {
    String[] symbols = new String[] { "+", "-", "*", "/" };
    for (String symbol : symbols) {
      if (token.equals(symbol)) {
        return true;
      }
    }
    return false;
  }

  public String evaluateExpression(String num1, String num2, String symbol) {
    int val2 = Integer.parseInt(num1);
    int val1 = Integer.parseInt(num2);
    int result = 0;
    // System.out.println(num1+" "+num2+" "+symbol);
    if (symbol.equals("+")) {
      result = val1 + val2;
    } else if (symbol.equals("-")) {
      result = val1 - val2;
    } else if (symbol.equals("*")) {
      result = val1 * val2;
    } else {
      result = (int) (val1 / val2);
    }
    return "" + result;
  }

  public int evalRPN(String[] tokens) {

    Stack<String> stack = new Stack<String>();

    // Loop for all values in token
    for (String token : tokens) {

      // Push to stack if the current value is not a symbol
      if (!this.isSymbol(token)) {
        stack.add(token);
      } else {
        // if symbol, pop last two values from stack
        String val1 = stack.pop();
        String val2 = stack.pop();
        // evalate with the current symbol and push it to stack
        String result = this.evaluateExpression(val1, val2, token);
        stack.add(result);
      }
    }

    return Integer.parseInt(stack.pop());
  }

}