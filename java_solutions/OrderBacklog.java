import java.util.*;

public class OrderBacklog {

  class Node {

    int value, count;

    Node(int value, int count) {
      this.value = value;
      this.count = count;
    }
  }

  public int getNumberOfBacklogOrders(int[][] orders) {

    PriorityQueue<Node> buy = new PriorityQueue<Node>((a, b) -> {
      return Integer.compare(b.value, a.value);
    });

    PriorityQueue<Node> sell = new PriorityQueue<Node>((a, b) -> {
      return Integer.compare(a.value, b.value);
    });

    HashMap<Integer, Node> buyMap = new HashMap<>();
    HashMap<Integer, Node> sellMap = new HashMap<>();

    for (int i = 0; i < orders.length; i++) {
      int price = orders[i][0], amount = orders[i][1], orderType = orders[i][2];

      if (orderType == 0) {
        // check if there is sell with lesser or equal amount
        while (!sell.isEmpty() && amount > 0 && sell.peek().value <= price) {
          --sell.peek().count;
          --amount;
          if (sell.peek().count == 0) {
            sell.poll();
          }
        }

        if (amount > 0) {
          buyMap.putIfAbsent(price, new Node(price, 0));
          Node buyNode = buyMap.get(price);
          buyNode.count += amount;
          if (buyNode.count == amount) {
            buy.add(buyNode);
          }
        }
      } else {
        // check if there is buy with greater or equal amount
        while (!buy.isEmpty() && amount > 0 && buy.peek().value >= price) {
          int minval = Math.min(sell.peek().count, amount);
          buy.peek().count -= minval;
          amount -= minval;
          if (buy.peek().count == 0) {
            buy.poll();
          }
        }

        if (amount > 0) {
          sellMap.putIfAbsent(price, new Node(price, 0));
          Node sellNode = sellMap.get(price);
          sellNode.count += amount;
          if (sellNode.count == amount) {
            sell.add(sellNode);
          }
        }
      }
    }

    int result = 0;
    for(Node node : buy) {
      result += node.count;
      result = result % 1000000007;
    }

    for(Node node : sell) {
      result += node.count;
      result = result % 1000000007;
    }

    return result;
  }
}
