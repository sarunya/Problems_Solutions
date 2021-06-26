public class FruitInToBaskets {

  public int totalFruit(int[] tree) {
    int result = 0, i = 0, j = 0, distinct = 0;
    int[] map = new int[400001];

    while (j < tree.length) {

      if (map[tree[j]] == 0) {
        // add new value to map
        ++distinct;
      }
      ++map[tree[j]];

      while (distinct > 2) {
        --map[tree[i]];
        if (map[tree[i]] == 0) {
          --distinct;
        }
        ++i;
      }
      System.out.println(j+" "+i+" "+result);
      result = Math.max(result, (j - i + 1));

      ++j;
    }

    return result;
  }


  public static void main(String[] args) {
    int[] arr = new int[]{3,3,3,1,2,1,1,2,3,3,4,3,3,3,1,2,1,1,2,3,3,4,3,3,3,1,2,1,1,2,3,3,4};

    FruitInToBaskets obj = new FruitInToBaskets();
    int result = obj.totalFruit(arr);
    System.out.println("Result is "+result);
  }
}
