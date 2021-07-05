import java.util.*;

public class ClosestElements {

  public List<Integer> findClosestElements(int[] arr, int k, int x) {
    List<Integer> rs=new ArrayList<Integer>();

    //find closest index
    int l=0, r=arr.length-1, mid, ans=0;

    while(l<=r) {
      mid = l + Math.floorDiv(r-l, 2);
      if(arr[mid]<x) {
        ans = mid;
        l = mid+1;
      } else if(arr[mid]>x) {
        r = mid-1;
      } else {
        ans = mid;
        break;
      }
    }

    r = l+1;
    l = ans;
    while(k>0) {
      
      int diffR = Integer.MAX_VALUE, diffL = Integer.MAX_VALUE;

      if(l>=0) {
        diffL = x - arr[l];
      }

      if(r<arr.length) {
        diffR = arr[r] - x;
      }

      if(diffL<=diffR) {
        rs.add(arr[l]);
        --l;
      } else {
        rs.add(arr[r]);
        ++r;
      }

      --k;
    }

    Collections.sort(rs);
    return rs;
  }

  public static void main(String[] args) {
    ClosestElements obj = new ClosestElements();

    int[] arr = new int[]{3,5,8,10};
    int k = 2;
    int x = 15;
    List<Integer> res = obj.findClosestElements(arr, k, x);

    for (int val : res) {
      System.out.println("val is " + val);
    }
  }
}
