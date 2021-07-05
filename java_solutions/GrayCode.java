import java.util.*;

public class GrayCode {
  public List<Integer> grayCode(int n) {
    List<Integer> rs=new ArrayList<Integer>();
    rs.add(0);
    for(int i=0;i<n;i++){
        int size=rs.size();
        for(int k=size-1;k>=0;k--) {
            System.out.println(Integer.toBinaryString(rs.get(k) | 1<<i));
            rs.add(rs.get(k) | 1<<i);
        }
    }
    return rs;
  }

  public static void main(String[] args) {
    GrayCode obj = new GrayCode();
    List<Integer> res = obj.grayCode(3);
    for(int val : res) {
      System.out.println("val is "+val);
    }
  }
}


     //00 --> processed
    //00    //10

    //  11  10