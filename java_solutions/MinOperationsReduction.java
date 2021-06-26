import java.util.Comparator;
import java.util.HashMap;
import java.util.PriorityQueue;

public class MinOperationsReduction {

  class PQ {
    int value;
    int count;

    public PQ(int value, int count) {
      this.value = value;
      this.count = count;
    }
  }

  class The_Comparator implements Comparator<PQ> {
    public int compare(PQ pq1, PQ pq2) {
      return pq1.value - pq2.value;
    }
  }

  public int reductionOperations(int[] nums) {
    int result = 0;

    PriorityQueue<PQ> pq = new PriorityQueue<>(new The_Comparator());
    HashMap<Integer, PQ> map = new HashMap<>();

    for (int num : nums) {
      if (map.containsKey(num)) {
        ++map.get(num).count;
      } else {
        map.put(num, new PQ(num, 1));
      }
    }

    for (int name : map.keySet()) 
    {
      {
        // search for value
        PQ url = map.get(name);
        pq.add(url);
      }
    }
    int prev = 0;
    while(pq.size()>1) {
      PQ top = pq.poll();
      result += (top.count+prev);
      prev = top.count;
      System.out.println(top.value+" "+top.count+" "+prev+" "+result);
    }


    return result;
  }


}