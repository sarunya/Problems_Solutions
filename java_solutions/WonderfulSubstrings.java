public class WonderfulSubstrings {

  public long wonderfulSubstrings(String word) {
    long answer = 0, bit=0;
    long[] bitArr = new long[word.length()];

    int j = 0;
    for(char ch : word.toCharArray()) {
      bit = bit ^ (1<<(ch-'a'));
      bitArr[j++] = bit;
    }

    for(long val : bitArr) {
      System.out.println("Value is "+val);
    }

    return answer;
  }

  public static void main(String[] args) {
    WonderfulSubstrings obj = new WonderfulSubstrings();
    long answer = obj.wonderfulSubstrings("ababccb");
    System.out.println("Result is "+answer);
  }

}
