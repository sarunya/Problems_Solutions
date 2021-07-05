import java.util.*;

public class ZigZagLabelBT {
  public List<Integer> pathInZigZagTree(int label) {
    List<Integer> result = new ArrayList<Integer>();

    // current row
    int row = 0;
    int current = label;
    while (current > 0) {
      current = current >> 1;
      ++row;
    }
    result.add(label);
    --row;
    
    while (row > 0) {
      label = Math.floorDiv(label, 2);
      int start = 1 << (row - 1);
      int end = (1 << row) - 1;
      if (row % 2 == 1) {
        label = (end - label) + start;
      } else {
        label = end - (label - start);
      }
      result.add(label);
      --row;
    }

    Collections.reverse(result);
    return result;
  }

  public static void main(String[] args) {
    ZigZagLabelBT obj = new ZigZagLabelBT();
    List<Integer> answer = obj.pathInZigZagTree(26);
    for (int val : answer) {
      System.out.println("In List " + val);
    }
  }
}
