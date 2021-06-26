import java.util.*;

public class CardDecks {
  public boolean hasGroupsSizeX(int[] deck) {
      Map<Integer, Integer> map = new HashMap<Integer, Integer>();
      
      for(int val: deck) {
          int count = 1;
          if(map.containsKey(val)) {
            count += map.get(val);
          }
          map.put(val, count);
      }
      int result = 0;
      for(int count : map.values()) {
        result = this.gcd(result, count);
        if(result == 1) {
          break;
        }
      }
      return result>0;
  }

  public int gcd(int a, int b) {
    System.out.println(a+" "+b);
    if(a==0) {
      return b;
    }
    return gcd(b, a%b);
  }
}