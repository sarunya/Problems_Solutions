import java.util.*;

public class CircularSolution {
  
  private class IntFreq {
    int val, frequency;

    IntFreq(int val) {
      this.val = val;
      this.frequency = 1;
    }

    public void increment() {
      ++this.frequency;
    }

    public void decrement() {
      --this.frequency;
    }

    public boolean isAvailable() {
      return this.frequency>0;
    }

  }

  public void printPriorityQueue(Queue<IntFreq> pq) {
    for(IntFreq intfreq: pq) {
      System.out.println(intfreq.val +" " + intfreq.frequency);
    }
  }

  public int[] rearrangeBarcodes(int[] barcodes) {
    Queue<IntFreq> pq = new PriorityQueue<IntFreq>((a,b) -> {
      System.out.println(a.frequency +" "+ b.frequency);
      return Integer.compare(a.frequency, b.frequency);
    });
    HashMap<Integer, IntFreq> hm = new HashMap<Integer, IntFreq>();

    for(int number : barcodes) {
      IntFreq freq = null;
      if(hm.containsKey(number)) {
        freq = hm.get(number);
        freq.increment();
      } else {
        freq = new IntFreq(number);
        hm.put(number, freq);
        pq.add(freq);
      }
    }

    this.printPriorityQueue(pq);

    int i = 0;
    while(!pq.isEmpty()) {
      IntFreq nodea = pq.poll(), nodeb = null;
      if(!nodea.isAvailable()) {
        break;
      }
      barcodes[i++] = nodea.val;
      if(!pq.isEmpty()) {
        nodeb = pq.poll();
        barcodes[i++] = nodeb.val;
      }
      nodea.decrement();
      if(nodea.isAvailable()) {
        pq.add(nodea);
      }
      if(nodeb!=null) {
        nodeb.decrement();
        if(nodeb.isAvailable()) {
          pq.add(nodeb);
        }
      }
    }

    return barcodes;
  }

  public static void main(String[] args) {
    CircularSolution solution = new CircularSolution();
    int[] arr = new int[]{1,2,2,1,1,1,1,1,1};
    arr = solution.rearrangeBarcodes(arr);
    for(int val : arr) {
      System.out.print(val);
    }
  }
}
