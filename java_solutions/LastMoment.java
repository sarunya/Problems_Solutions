public class LastMoment {
  public int getLastMoment(int n, int[] left, int[] right) {
      int result = 0, lastleft = 0, lastRight = n;

      for(int val : left) {
        lastleft = Math.max(lastleft, val);
      }

      for(int val : right) {
        lastRight = Math.min(lastRight, val);
      }

      result = Math.max(n-lastRight, lastleft);
      
      return result;
  }

  public static void main(String[] args) {
    LastMoment obj = new LastMoment();
    int n = 4;
    int[] left = new int[]{4,3}, right = new int[]{1,0};
    int result = obj.getLastMoment(n, left, right);
    System.out.println("Result is "+result);
  }
}
